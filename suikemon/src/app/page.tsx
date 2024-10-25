import type { Metadata } from 'next';
import SuikemonList from "@/components/suikemonList";

export const metadata: Metadata = {
    title: "Suikemon",
    description: "Please enjoy your card drawing and pet raising journey!",
    icons: "/52poke.png"
}

export default function Home() {
    return (
        <main>
            <SuikemonList />
        </main>
    );
}
