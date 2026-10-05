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
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent px-4 py-5 sm:px-6 sm:py-24">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-87.5 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.07] blur-[140px]" />

            <div className="relative w-full max-w-xl rounded-[28px] border border-white/8 bg-white/2.5 px-5 pb-8 pt-20 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-8 sm:pb-9 sm:pt-24">

                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative rounded-full bg-linear-to-br from-(--color-blue) via-blue-500 to-(--color-beige) p-0.5 shadow-[0_0_30px_rgba(35,183,217,0.15)]">
                        <div className="rounded-full bg-(--color-black) p-1">
                            <div className="rounded-full bg-(--color-black) p-1">
                                <Image
                                    src="/images/wendell.jpeg"
                                    alt="Wendell Bonucci"
                                    width={128}
                                    height={128}
                                    priority
                                    className="h-28 w-28 rounded-full object-cover object-[center_22%] sm:h-32 sm:w-32"
                                />
                            </div>
                        </div>

                        <span className="absolute bottom-2 right-1 h-4 w-4 rounded-full border-[3px] border-(--color-black) bg-(--color-blue)" />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">

                    <span className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-(--color-blue) sm:text-xs">Perfil profissional</span>

                    <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Wendell Bonucci</h1>
                    <p className="mt-1.5 text-xs text-white/40 sm:text-sm">@srrwende.ll</p>

                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-white/45 sm:text-sm">
                        <MapPin size={14} className="text-(--color-blue)" />
                        <span>Fortaleza, CE</span>
                    </div>

                    <div className="mt-5 min-h-6 text-sm font-medium text-(--color-blue) sm:text-base">
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

                    <p className="mt-4 max-w-md text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
                        Transformo ideias, dados e processos em soluções digitais.
                        Atuo com desenvolvimento de software, análise de dados e
                        gestão, criando ferramentas que ajudam empresas a
                        simplificar processos e tomar melhores decisões.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div key={skill.id} className="group flex items-center gap-1.5 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-[11px] font-medium text-white/50 transition-all duration-300 hover:border-blue/30 hover:bg-blue/8 hover:text-white sm:text-xs">
                                    <Icon size={13} className="text-(--color-blue)" />
                                    {skill.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}