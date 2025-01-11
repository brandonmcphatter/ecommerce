import {useState} from "react";
import {MinusIcon, PlusIcon} from "@/components/FooterSection/Icons";

export default function Explore() {

    const [closed, setClosed] = useState(true);
    const handleClosed = () => {
        setClosed(!closed);
    }
    return (
        <>
            <div className={'md:flex md:flex-col gap-4'}>
                <div className={'flex justify-between border-b md:border-none border-dotted pb-3'}>
                    <h4 className={'text-xl font-bold'}>Explore CoolKix</h4>
                    <div className={'cursor-pointer md:hidden'} onClick={handleClosed}>{closed ? <PlusIcon/> :
                        <MinusIcon/>}</div>
                </div>
                <div className={`${closed ? 'hidden' : 'block'}`}>
                    <ul>
                        <li>Brands</li>
                        <li>Clothing</li>
                        <li>Style Room</li>
                        <li>New Arrivals</li>
                        <li>Running</li>
                        <li>Jackets</li>
                        <li>Watches</li>
                    </ul>
                </div>
                <div className={'hidden md:block'}>
                    <ul className={'flex flex-col gap-4 text-sm'}>
                        <li>Brands</li>
                        <li>Clothing</li>
                        <li>Style Room</li>
                        <li>New Arrivals</li>
                        <li>Running</li>
                        <li>Jackets</li>
                        <li>Watches</li>
                    </ul>
                </div>
            </div>
        </>
    )
}