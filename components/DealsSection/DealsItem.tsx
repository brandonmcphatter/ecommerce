import Image from "next/image";

export default function DealsItem({title, img}: {title: string, img: string}) {
    return (
        <div className={'flex flex-col gap-3 '}>
            <div className={'dealsCard w-fit border-4 border-white hover:border-blue-300'}>
                <Image className={'object-cover w-full h-full'} src={img} alt={'image'} width={400} height={300}/>
            </div>
            <h1 className={'text-center'}>{title}</h1>
        </div>
    )
}