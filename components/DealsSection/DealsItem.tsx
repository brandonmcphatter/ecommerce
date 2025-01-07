export default function DealsItem({title}: {title: string}) {
    return (
        <div className={'flex flex-col gap-3 '}>
            <div className={'dealsCard w-fit'}>

            </div>
            <h1 className={'text-center'}>{title}</h1>
        </div>
    )
}