import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

import { FiArrowUpRight, FiBookOpen, FiBriefcase, FiCode, FiInstagram, FiMail, } from "react-icons/fi";

type LinkItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: IconType;
    external: boolean;
    comingSoon: boolean;
    color: string;
    background: string;
    border: string;
};

type CardStyle = CSSProperties & {
    "--card-color": string;
    "--card-background": string;
    "--card-border": string;
};

const links: LinkItem[] = [
    {
        id: "email",
        title: "E-mail",
        description: "Vamos conversar sobre projetos e parcerias.",
        href: "mailto:wendellbonucci@gmail.com",
        icon: FiMail,
        external: false,
        comingSoon: false,
        color: "#79c4f2",
        background: "rgba(121, 196, 242, 0.07)",
        border: "rgba(121, 196, 242, 0.20)",
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Minha rotina, ideias e bastidores.",
        href: "https://instagram.com/srrwende.ll",
        icon: FiInstagram,
        external: true,
        comingSoon: false,
        color: "#f08cbb",
        background: "rgba(240, 140, 187, 0.07)",
        border: "rgba(240, 140, 187, 0.20)",
    },
    {
        id: "portfolio",
        title: "Portfólio",
        description: "Projetos, código e soluções digitais.",
        href: "https://wendellbonucci.vercel.app",
        icon: FiBriefcase,
        external: true,
        comingSoon: false,
        color: "#63d4bc",
        background: "rgba(99, 212, 188, 0.07)",
        border: "rgba(99, 212, 188, 0.20)",
    },
    {
        id: "ebook",
        title: "Meu E-book",
        description: "Um novo conteúdo está sendo preparado.",
        href: "",
        icon: FiBookOpen,
        external: false,
        comingSoon: true,
        color: "#ebbd79",
        background: "rgba(235, 189, 121, 0.07)",
        border: "rgba(235, 189, 121, 0.20)",
    },
];

function LinkCard({ item }: { item: LinkItem }) {
    const Icon = item.icon;
    const isAvailable = Boolean(item.href) && !item.comingSoon;

    const style: CardStyle = {
        "--card-color": item.color,
        "--card-background": item.background,
        "--card-border": item.border,
    };

    const baseClassName = `
        group relative flex h-full min-h-[180px] min-w-0
        flex-col justify-between gap-5
        overflow-hidden rounded-[18px]
        border border-[var(--card-border)]
        bg-[var(--card-background)]
        p-4 backdrop-blur-xl
        shadow-[0_8px_24px_rgba(0,0,0,0.10)]
        sm:min-h-[188px] sm:p-5
    `;

    const content = (
        <>
            <div className="flex items-start justify-between gap-2">
                <span className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5.5 text-(--card-color)">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>

                {isAvailable && (
                    <FiArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-(--color-gray) transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-(--card-color) motion-reduce:transform-none motion-reduce:transition-none" />
                )}
            </div>

            <div className="min-w-0">
                <h3 className="wrap-break-word text-base font-semibold leading-tight tracking-tight text-(--color-white)sm:text-lg">
                    {item.title}
                </h3>

                <p className=" mt-2 text-xs leading-relaxed text-(--color-gray) sm:text-[13px]">
                    {item.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-(--card-color) sm:text-xs">
                    {!isAvailable && (
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--card-color)"/>
                    )}

                    {isAvailable ? item.id === "email" ? "Enviar e-mail" : "Acessar" : "Em breve"}
                </span>
            </div>
        </>
    );

    if (!isAvailable) {
        return (
            <div style={style} className={baseClassName}>
                {content}
            </div>
        );
    }

    return (
        <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            style={style}
            className={`${baseClassName} no-underline transition-all duration-300 hover:-translate-y-1 hover:border-(--card-color) hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)]
                focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-(--card-color) motion-reduce:transform-none motion-reduce:transition-none`}>
            {content}

            {item.external && (
                <span className="sr-only">
                    Abre em nova aba.
                </span>
            )}
        </a>
    );
}

export default function Links() {
    return (
        <section
            aria-labelledby="links-heading"
            className="relative isolate mx-auto w-full max-w-145 px-4 pb-8 sm:px-5">
            <h2 id="links-heading" className="mb-3.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-(--color-gray) sm:text-xs">
                <FiCode size={15} strokeWidth={1.8} aria-hidden="true" className="text-(--color-blue)" />
                Explore meus links
            </h2>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {links.map((item) => (
                    <LinkCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}