import { FiCode } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="relative mx-auto w-full max-w-145 px-4 pb-8 pt-2 sm:px-5 sm:pb-10">
            <div className="flex flex-col items-center border-t border-white/10 pt-6 text-center">
                <span aria-hidden="true" className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]" style={{ color: "var(--color-blue)" }}>
                    <FiCode size={17} />
                </span>

                <p className="text-xs font-medium" style={{ color: "var(--color-white)" }}>
                    © {new Date().getFullYear()} Wendell Bonucci
                </p>

                <p className="mt-2 text-[11px] leading-relaxed" style={{ color: "var(--color-gray)" }}>
                    Ideias em código. Projetos em movimento.
                </p>
            </div>
        </footer>
    );
}