import Link from "next/link";

export default function ClearanceBanner() {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-3 bg-blue-400 gap-3 px-10 py-10 md:p-2'}>
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

                <div className={'clearanceImg hidden md:flex'}>

                </div>
                <div className={'clearanceImg hidden md:flex'}>

                </div>

        </div>
    )
}