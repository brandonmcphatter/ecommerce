export default function ShopSaveCard({description, action, icon}: {description: string, action: string, icon: string}) {
    return (
        <div className={'bg-gray-400 rounded flex justify-between p-2'}>
            <div className={'flex flex-col gap-3 w-3/4'}>
                <h3 className={'font-bold text-2xl'}>{description}</h3>
                <p>{action}</p>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}