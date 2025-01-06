import Link from "next/link";

export default function TrendingItem({title}:{title: string}) {
    return (
        <Link href={'#'}>
            <div className={'flex flex-col justify-center items-center gap-1'}>
                <div className={'trendingPhoto'}>
                    {/*<Image className={''} src={'https://picsum.photos/200'} alt={'image'} width={200} height={300}/>*/}
                </div>
                <h3 className={'text-center underline underline-offset-4'}>{title}</h3>
            </div>
        </Link>
    );
}