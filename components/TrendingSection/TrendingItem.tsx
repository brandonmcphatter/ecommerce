import Link from "next/link";
import Image from "next/image";

export default function TrendingItem({title, img}:{title: string, img: string}) {
    return (
        <Link href={'/shoes'}>
            <div className={'flex flex-col justify-center items-center gap-1'}>
                <div className={'trendingPhoto rounded'}>
                    <Image className={'object-cover w-full h-full'} src={img} alt={'image'} width={200} height={300}/>
                </div>
                <h3 className={'text-center underline underline-offset-4'}>{title}</h3>
            </div>
        </Link>
    );
}