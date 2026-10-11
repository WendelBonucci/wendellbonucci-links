"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Code2, Database, BriefcaseBusiness } from "lucide-react";
import Typewriter from "typewriter-effect";

const skills = [
    { id: "data", label: "Análise de Dados", icon: Database },
    { id: "development", label: "Full-Stack", icon: Code2 },
    { id: "business", label: "Administração", icon: BriefcaseBusiness },
];

const roles = [
    "Analista de Dados",
    "Desenvolvedor Full-Stack",
    "Administrador Empresarial",
    "Criador de Software",
];

export default function Hero() {
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updatePreference = () => setAnimateText(!media.matches);

        updatePreference();
        media.addEventListener("change", updatePreference);

        return () => media.removeEventListener("change", updatePreference);
    }, []);

    return (
        <section aria-labelledby="profile-name" className="relative isolate mx-auto w-full max-w-145 px-4 pb-6 pt-12 sm:px-5 sm:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-16 -z-10 h-64 rounded-full opacity-10 blur-[80px]" style={{ backgroundColor: "var(--color-blue)" }} />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] px-5 py-8 shadow-[0_16px_48px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:px-8 sm:py-9">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-12 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-blue), transparent)", opacity: 0.45 }} />

                <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-5">
                        <div aria-hidden="true" className="absolute -inset-3 rounded-full opacity-15 blur-xl" style={{ backgroundColor: "var(--color-blue)" }} />

                        <div className="relative rounded-full p-0.75" style={{ background: "linear-gradient(135deg, var(--color-blue), #d6ecff 48%, #2f7dfd)" }}>
                            <div className="rounded-full p-1" style={{ backgroundColor: "var(--color-black)" }}>
                                <Image src="/images/wendell.jpeg" alt="Foto de Wendell Bonucci" width={120} height={120} sizes="(max-width: 640px) 104px, 120px" priority className="h-26 w-26 rounded-full object-cover object-[center_22%] sm:h-30 sm:w-30" />
                            </div>
                        </div>
                    </div>

                    <h1 id="profile-name" className="text-[1.9rem] font-bold leading-tight tracking-[-0.04em] sm:text-4xl" style={{ color: "var(--color-white)" }}>
                        Wendell Bonucci
                    </h1>

                    <p className="mt-1.5 text-sm" style={{ color: "var(--color-gray)" }}>@srrwende.ll</p>

                    <p className="mt-2.5 flex items-center justify-center gap-1.5 text-xs" style={{ color: "var(--color-gray)" }}>
                        <MapPin size={13} strokeWidth={1.8} aria-hidden="true" style={{ color: "var(--color-blue)" }} />
                        Fortaleza, CE
                    </p>

                    <div className="mt-5 flex min-h-7 items-center justify-center text-sm font-medium sm:text-base" style={{ color: "var(--color-blue)" }}>
                        <span className="sr-only">{roles.join(". ")}.</span>

                        <div aria-hidden="true">
                            {animateText ? (
                                <Typewriter options={{ strings: roles, autoStart: true, loop: true, delay: 55, deleteSpeed: 30, pauseFor: 1800 }} />
                            ) : (
                                <span>Desenvolvedor Full-Stack</span>
                            )}
                        </div>
                    </div>

                    <p className="mt-3 max-w-100 text-sm leading-7" style={{ color: "var(--color-gray)" }}>
                        Transformo ideias, dados e processos em soluções digitais. Aqui você encontra meus projetos, conteúdos e os próximos passos da minha jornada.
                    </p>

                    <ul aria-label="Áreas de atuação" className="mt-6 flex flex-wrap justify-center gap-2">
                        {skills.map(({ id, label, icon: Icon }) => (
                            <li key={id} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-medium sm:px-3.5 sm:text-xs" style={{ color: "var(--color-white)" }}>
                                <Icon size={14} strokeWidth={1.8} aria-hidden="true" style={{ color: "var(--color-blue)" }} />
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}