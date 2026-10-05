import Link from "next/link";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Mail, } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const links = [
    {
        id: "email",
        title: "E-mail",
        description: "Entre em contato comigo",
        href: "mailto:seuemail@gmail.com",
        icon: Mail,
        external: false,
        iconColor: "text-sky-400",
        iconBackground: "bg-sky-400/10",
        border: "border-sky-400/20",
        background: "bg-sky-400/[0.055]",
        hover: "hover:border-sky-400/40 hover:bg-sky-400/[0.08]",
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Acompanhe meu dia a dia e meus conteúdos",
        href: "https://instagram.com/srrwende.ll",
        icon: FaInstagram,
        external: true,
        iconColor: "text-pink-500",
        iconBackground: "bg-pink-500/10",
        border: "border-pink-500/20",
        background: "bg-pink-500/[0.055]",
        hover: "hover:border-pink-500/40 hover:bg-pink-500/[0.08]",
    },
    {
        id: "portfolio",
        title: "Portfólio",
        description: "Conheça meus projetos e trabalhos",
        href: "https://wendellbonucci.vercel.app",
        icon: BriefcaseBusiness,
        external: true,
        iconColor: "text-cyan-400",
        iconBackground: "bg-cyan-400/10",
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.055]",
        hover: "hover:border-cyan-400/40 hover:bg-cyan-400/[0.08]",
    },
    {
        id: "ebook",
        title: "Meu E-book",
        description: "Um novo conteúdo está sendo preparado",
        href: "",
        icon: BookOpen,
        external: false,
        comingSoon: true,
        iconColor: "text-amber-300",
        iconBackground: "bg-amber-300/10",
        border: "border-amber-300/20",
        background: "bg-amber-300/[0.055]",
        hover: "",
    },
];

export default function Links() {
    return (
        <section className="relative w-full overflow-hidden bg-transparent px-4 py-8 sm:px-6 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/5 blur-[120px]" />

            <div className="relative mx-auto w-full max-w-xl">
                <div className="mb-6">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-(--color-blue) sm:text-xs">
                        Meus links
                    </span>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        Explore um pouco mais.
                    </h2>

                    <p className="mt-2 max-w-md text-xs leading-5 text-white/40 sm:text-sm">
                        Redes sociais, contato, projetos e conteúdos reunidos em um só lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {links.map((item) => {
                        const Icon = item.icon;

                        const content = (
                            <>
                                <div className="flex items-start justify-between">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBackground}`}>
                                        <Icon size={18} className={item.iconColor} />
                                    </div>

                                    {item.comingSoon ? (
                                        <span className="rounded-full border border-white/10 bg-white/4 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-white/40">
                                            Em breve
                                        </span>
                                    ) : (
                                        <ArrowUpRight size={16} className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                                    )}
                                </div>

                                <div className="mt-7">
                                    <h3 className="text-sm font-semibold text-white sm:text-base">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-xs leading-5 text-white/40">
                                        {item.description}
                                    </p>
                                </div>
                            </>
                        );

                        if (item.comingSoon) {
                            return (
                                <div key={item.id} className={`relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border p-5 ${item.border} ${item.background}`}>
                                    {content}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className={`group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${item.border} ${item.background} ${item.hover}`}>
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}