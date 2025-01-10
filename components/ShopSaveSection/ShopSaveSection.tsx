import ShopSaveCard from "@/components/ShopSaveSection/ShopSaveCard";

export default function ShopSaveSection() {
    const shopSave = {
        description: "Link Your Prime: 2x VIP points and special deals.",
        action: "Link Your Prime",
        icon: "🔗"
    }
    return (
        <section className={''}>
            <div>
                <h2 className={'font-bold text-xl'}>Ways to Shop & Save!</h2>
            </div>

            <div className={'flex flex-col md:flex-row gap-4'}>
                <ShopSaveCard description={shopSave.description} action={shopSave.action} icon={shopSave.icon}/>
                <ShopSaveCard description={shopSave.description} action={shopSave.action} icon={shopSave.icon}/>
                <ShopSaveCard description={shopSave.description} action={shopSave.action} icon={shopSave.icon}/>
            </div>

        </section>
    )
}

