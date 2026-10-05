"use client";

import Image from "next/image";
import { MapPin, Code2, Database, BriefcaseBusiness } from "lucide-react";
import Typewriter from "typewriter-effect";

const skills = [
    {
        id: "data",
        label: "Análise de Dados",
        icon: Database,
    },
    {
        id: "development",
        label: "Full-Stack",
        icon: Code2,
    },
    {
        id: "business",
        label: "Administração",
        icon: BriefcaseBusiness,
    },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-(--color-black) px-4 py-16 sm:px-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
                style={{ backgroundColor: "var(--color-blue)" }} />

            <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/2  px-6 pb-8 pt-16 backdrop-blur-2xl sm:px-10 sm:pb-10 sm:pt-20 shadow-2xl">

                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative rounded-full p-0.5 shadow-lg"
                        style={{ background: "linear-gradient(180deg, rgba(121, 196, 242, 0.4) 0%, rgba(255,255,255,0.05) 100%)" }}>
                        <div className="rounded-full p-1" style={{ backgroundColor: "var(--color-black)" }}>
                            <Image
                                src="/images/wendell.jpeg"
                                alt="Wendell Bonucci"
                                width={112}
                                height={112}
                                priority
                                className="h-24 w-24 rounded-full object-cover object-[center_22%] sm:h-28 sm:w-28"
                            />
                        </div>

                        <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2"
                            style={{ backgroundColor: "var(--color-blue)", borderColor: "var(--color-black)" }} />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">

                    <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] opacity-90 sm:text-xs"
                        style={{ color: "var(--color-blue)" }}>
                        Perfil Profissional
                    </span>

                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl"
                        style={{ color: "var(--color-white)" }}>
                        Wendell Bonucci
                    </h1>
                    <p className="mt-1 text-xs sm:text-sm"
                        style={{ color: "var(--color-gray)" }}>
                        @srrwende.ll
                    </p>

                    <div
                        className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium"
                        style={{ color: "var(--color-gray)" }}>
                        <MapPin size={14} style={{ color: "var(--color-blue)" }} />
                        <span>Fortaleza, CE</span>
                    </div>

                    <div className="mt-5 min-h-6 text-sm font-medium sm:text-base" style={{ color: "var(--color-blue)" }}>
                        <Typewriter
                            options={{
                                strings: [
                                    "Analista de Dados",
                                    "Desenvolvedor Full-Stack",
                                    "Administrador Empresarial",
                                    "Criador de Software",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 55,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>

                    <p className="mt-4 max-w-sm text-xs leading-relaxed sm:text-sm sm:leading-relaxed"
                        style={{ color: "var(--color-gray)" }}>
                        Transformo ideias, dados e processos em soluções digitais. Atuo no desenvolvimento de software, análise de dados e gestão.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div key={skill.id} className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                                    style={{ color: "var(--color-white)" }}>
                                    <Icon size={14} style={{ color: "var(--color-blue)" }} />
                                    <span>{skill.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}