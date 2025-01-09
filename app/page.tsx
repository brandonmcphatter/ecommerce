import TrendingSection from "@/components/TrendingSection/TrendingSection";
import ClearanceBanner from "@/components/generalUse/ClearanceBanner";
import DealsSection from "@/components/DealsSection/DealsSection";
import NewArrivalsSection from "@/components/NewArrivalsSection/NewArrivalsSection";
import ShopSaveSection from "@/components/ShopSaveSection/ShopSaveSection";

export default function Home() {
    return (
        <div>
            <main>
                <TrendingSection/>
                <ClearanceBanner/>
                <DealsSection/>
                <NewArrivalsSection />
                <ShopSaveSection />
            </main>
        </div>
    );
}
