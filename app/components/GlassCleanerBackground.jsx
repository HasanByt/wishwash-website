"use client";
import { useEffect, useRef } from "react";

export default function GlassCleanerBackground() {
    const canvasRef = useRef(null);
    const wiperRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const wiper = wiperRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Soap Layer
        const soap = new Image();
        soap.src = "/soap.png";

        soap.onload = () => {
            ctx.globalAlpha = 0.55; // subtiler Look
            ctx.drawImage(soap, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        };

        let firstMove = true;

        function cleanAt(clientX, clientY) {
            const rect = canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            if (firstMove) {
                wiper.style.opacity = 1;
                firstMove = false;
            }

            const w = wiper.offsetWidth;
            const h = wiper.offsetHeight;

            // Wiper Position aktualisieren
            wiper.style.left = `${x - w / 2}px`;
            wiper.style.top = `${y - h / 2}px`;

            // ---- Realistische Wischfläche ----

            // Breite = Wiper-Breite
            const wipeWidth = w * 0.85;     // 85% des Wischers = Gummilänge
            const wipeHeight = 30;          // Gummihöhe (kann angepasst werden)
            const radius = 12;              // Abrundung

            ctx.globalCompositeOperation = "destination-out";

            ctx.beginPath();
            ctx.roundRect(
                x - wipeWidth / 2,    // links
                y - wipeHeight / 2,   // oben
                wipeWidth,            // Breite
                wipeHeight,           // Höhe
                radius                // Rundungen
            );
            ctx.fill();

            ctx.globalCompositeOperation = "source-over";
        }


        function onMouseMove(e) {
            cleanAt(e.clientX, e.clientY);
        }

        function onTouchMove(e) {
            const t = e.touches[0];
            cleanAt(t.clientX, t.clientY);
        }


        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("touchmove", onTouchMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
            <img
                ref={wiperRef}
                src="/wiper.png"
                className="absolute w-32 opacity-0 transition-opacity duration-200 select-none"
                alt="wiper"
            />
        </div>
    );
}
