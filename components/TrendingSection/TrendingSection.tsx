import TrendingItem from "@/components/TrendingSection/TrendingItem";

export default function TrendingSection() {
    const itemTitles = ['Sneakers', 'Boots', 'Coats', 'Heels', 'Bags', 'Clearance'];
    return (
        <section className={'flex flex-col gap-4'}>
            <h1 className={'font-bold text-xl'}>Trending Now</h1>
            <div className={'grid grid-cols-3 md:grid-cols-6 gap-3'}>
                {/*6 image links with titles*/}
                {itemTitles.map((itemTitle, index) => <TrendingItem title={itemTitle} key={index} />)}
            </div>
        </section>
    );
}