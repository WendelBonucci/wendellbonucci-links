import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-(--color-background)">
            <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-(--color-blue)/6 blur-[160px]" />

            <div className="absolute -left-40 top-[35%] h-112 w-md rounded-full bg-(--color-blue)/5 blur-[140px]" />

            <div className="absolute -right-40 top-[55%] h-112 w-md rounded-full bg-(--color-blue)/5 blur-[140px]" />

            <div className="absolute inset-0 opacity-30">
                <BackgroundBeams />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--color-background)/70" />
        </div>
    );
}