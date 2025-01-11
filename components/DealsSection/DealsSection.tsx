import DealsItem from "@/components/DealsSection/DealsItem";

export default function DealsSection() {
    const itemTitles = ['Shop $50 & Under Deals', '$100 & Under Deals', "Shop Kids' Clearance"];
    const photoUrls = ['https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/974902/pexels-photo-974902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ];

    return (
        <section className={'flex flex-col bg-gray-200 py-6 gap-4 px-8'}>
            <h1 className={'font-bold text-xl'}>Deals & Steals</h1>
            <div className={' flex gap-4 overflow-x-auto pb-6 md:justify-start'}>
                {itemTitles.map((title, index) => (
                    <DealsItem title={title} img={photoUrls[index]} key={title}/>
                ))}

            </div>
        </section>
    )
}