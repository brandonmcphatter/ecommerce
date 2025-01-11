import TrendingItem from "@/components/TrendingSection/TrendingItem";

export default function TrendingSection() {
    const itemTitles = ['Sneakers', 'Boots', 'Coats', 'Heels', 'Bags', 'Clearance'];
    const photoUrls = ['https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1501210/pexels-photo-1501210.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7539509/pexels-photo-7539509.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3389419/pexels-photo-3389419.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=400']
    return (
        <section className={'flex flex-col gap-4 px-8'}>
            <h1 className={'font-bold text-xl'}>Trending Now</h1>
            <div className={'grid grid-cols-3 md:grid-cols-6 gap-3'}>
                {/*6 image links with titles*/}
                {itemTitles.map((itemTitle, index) => <TrendingItem title={itemTitle} key={index} img={photoUrls[index]} />)}
            </div>
        </section>
    );
}