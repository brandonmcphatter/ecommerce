import TrendingSection from "@/components/TrendingSection/TrendingSection";
import ClearanceBanner from "@/components/generalUse/ClearanceBanner";

export default function Home() {
  return (
    <div>
      <main>
        <TrendingSection />
          <ClearanceBanner />
      </main>
    </div>
  );
}
