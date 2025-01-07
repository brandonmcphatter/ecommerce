import TrendingSection from "@/components/TrendingSection/TrendingSection";
import ClearanceBanner from "@/components/generalUse/ClearanceBanner";
import DealsSection from "@/components/DealsSection/DealsSection";

export default function Home() {
    return (
        <div>
            <main>
                <TrendingSection/>
                <ClearanceBanner/>
                <DealsSection/>
            </main>
        </div>
    );
}
