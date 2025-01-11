import {useState} from "react";
import {MinusIcon, PlusIcon} from "@/components/FooterSection/Icons";

export default function About() {
    const [closed, setClosed] = useState(true);
    const handleClosed = () => {
        setClosed(!closed);
    }
    return (
        <>
            <div className={'md:flex md:flex-col gap-4'}>
                <div className={'flex justify-between border-b border-dotted md:border-none pb-3'}>
                    <h4 className={'text-xl font-bold'}>About CoolKix</h4>
                    <div className={'cursor-pointer  md:hidden'} onClick={handleClosed}>{closed ? <PlusIcon/> :
                        <MinusIcon/>}</div>
                </div>
                <div className={`${closed ? 'hidden' : 'block'}`}>
                    <ul>
                        <li>About</li>
                        <li>Mobile App</li>
                        <li>Amazon Benefits</li>
                        <li>Coupons & Sales</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
                <div className={'hidden md:block'}>
                    <ul className={'flex flex-col gap-4 text-sm'}>
                        <li>About</li>
                        <li>Mobile App</li>
                        <li>Amazon Benefits</li>
                        <li>Coupons & Sales</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </div>
        </>
    )
}