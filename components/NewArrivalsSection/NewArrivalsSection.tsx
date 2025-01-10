import NewArrivalCard from "@/components/NewArrivalsSection/NewArrivalCard";

export default function NewArrivalsSection() {
    const shoes = [
        {brand: 'Nike', shoeName: 'Air Force 1', gender: 'Men', price: 100},
        {brand: 'Vans', shoeName: 'Old Skool', gender: 'Women', price: 100},
        {brand: 'Crocs', shoeName: 'Classic Clog', gender: 'Men', price: 100}
    ]

    return (
        <section className={''}>
            <div className={'flex gap-4 py-6 overflow-x-auto'}>
                <div>
                    <div className={'newArrivalLead flex flex-col items-center justify-center gap-3'}>
                        <h5 className={'text-sm'}>A FIRST LOOK</h5>
                        <h2 className={'text-3xl'}>New Arrivals</h2>
                        <button className={' border-2 border-black rounded px-3 py-1 text-sm'}>Shop What&#39;s New</button>
                    </div>
                </div>
                {shoes.map((shoe, index) => <NewArrivalCard {...shoe} key={index}/>)}
                {/*<NewArrivalCard brand={shoes[0].brand} shoeName={shoes[0].shoeName} gender={shoes[0].gender} price={shoes[0].price}/>*/}
            </div>
        </section>
    )
}