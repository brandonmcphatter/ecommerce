import DealsItem from "@/components/DealsSection/DealsItem";

export default function DealsSection() {
    const itemTitles = ['Shop $50 & Under Deals', '$100 & Under Deals', "Shop Kids' Clearance"];

    return (
        <section className={'flex flex-col bg-gray-400 py-6 gap-4'}>
            <h1 className={'font-bold text-xl'}>Deals & Steals</h1>
            <div className={' flex gap-4 overflow-x-auto'}>
                {itemTitles.map((title) => (
                    <DealsItem title={title} key={title}/>
                ))}

            </div>
        </section>
    )
}