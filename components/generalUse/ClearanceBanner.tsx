import Link from "next/link";
import Image from "next/image";

export default function ClearanceBanner() {
    return (
        <div className={'banner grid grid-cols-1 md:grid-cols-3 bg-blue-400 gap-3 px-10 py-10 md:p-4 md:mx-8'}>
            {/*Banner Text*/}
            <div className={'flex flex-col justify-center items-center text-center gap-3'}>
                <h1 className={'text-5xl'}>Winter <br/>Clearance</h1>
                <h3 className={'text-2xl md:text-xs'}>
                    Update your closet while year-round <br/>favorites are <strong> up to 70% off</strong>
                </h3>
                <Link href={'#'}>
                    <h4 className={'underline underline-offset-4 md:text-xs'}>
                        Shop Now
                    </h4>
                </Link>
            </div>

            {/*Banner Image 1 & 2*/}

                <div className={'clearanceImg hidden md:flex border-4 border-white '}>
                    <Image className={'object-cover h-full w-full'} src={'https://images.pexels.com/photos/10370342/pexels-photo-10370342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'photo 1'} width={300} height={500}/>
                </div>
                <div className={'clearanceImg hidden md:flex border-4 border-white'}>
                    <Image className={'object-cover h-full w-full'} src={'https://images.pexels.com/photos/6383228/pexels-photo-6383228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'photo 2'} width={300} height={500}/>
                </div>

        </div>
    )
}