import Hero from "./hero/Hero"
import Links from "./cardsLinks/Links"

export default function HomeMain() {
    return (
        <main className="w-full h-full flex flex-col overflow-hidden">
            <Hero />
            <Links />
        </main>
    )
}