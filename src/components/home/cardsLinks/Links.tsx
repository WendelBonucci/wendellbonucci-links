"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const links = [
    {
        id: "email",
        title: "E-mail",
        description: "Entre em contato comigo para projetos ou parcerias",
        href: "mailto:seuemail@gmail.com",
        icon: Mail,
        external: false,
        comingSoon: false,
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Acompanhe meu dia a dia, rotina e bastidores",
        href: "https://instagram.com/srrwende.ll",
        icon: FaInstagram,
        external: true,
        comingSoon: false,
    },
    {
        id: "portfolio",
        title: "Portfólio",
        description: "Conheça meus principais projetos e cases",
        href: "https://wendellbonucci.vercel.app",
        icon: BriefcaseBusiness,
        external: true,
        comingSoon: false,
    },
    {
        id: "ebook",
        title: "Meu E-book",
        description: "Um guia prático em produção",
        href: "",
        icon: BookOpen,
        external: false,
        comingSoon: true,
    },
];

export default function Links() {
    return (
        <section className="relative w-full overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: "var(--color-blue)" }} />

            <div className="relative mx-auto w-full max-w-lg">
                <div className="mb-8 text-center sm:text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-90 sm:text-xs" style={{ color: "var(--color-blue)" }}>
                        Conecte-se
                    </span>

                    <h2 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "var(--color-white)" }}>
                        Explore um pouco mais.
                    </h2>

                    <p className="mt-1.5 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--color-gray)" }}>
                        Redes sociais, contato direto, projetos e conteúdos reunidos em um só lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {links.map((item) => {
                        const Icon = item.icon;

                        const CardContent = (
                            <>
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 transition-colors group-hover:border-white/20 group-hover:bg-white/8">
                                        <Icon size={18} style={{ color: "var(--color-blue)" }} />
                                    </div>

                                    {item.comingSoon ? (
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/40">
                                            Em breve
                                        </span>
                                    ) : (
                                        <ArrowUpRight
                                            size={18}
                                            className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                                        />
                                    )}
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-sm font-medium tracking-tight sm:text-base" style={{ color: "var(--color-white)" }}>
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--color-gray)" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </>
                        );

                        if (item.comingSoon) {
                            return (
                                <div key={item.id} className="relative flex min-h-35 cursor-not-allowed flex-col justify-between rounded-2xl border border-white/5 bg-white/1 p-5 opacity-60 backdrop-blur-md">
                                    {CardContent}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="group relative flex min-h-35 flex-col justify-between rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:shadow-xl hover:shadow-black/20">
                                {CardContent}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}