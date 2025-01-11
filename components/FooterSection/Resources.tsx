import {MinusIcon, PlusIcon} from "@/components/FooterSection/Icons";
import {useState} from "react";

export default function Resources() {
    const [closed, setClosed] = useState(true);
    const handleClosed = () => {
        setClosed(!closed);
    }

    return (
        <>
            <div className={'md:flex md:flex-col gap-4'}>
                <div className={'flex justify-between border-b border-dotted md:border-none pb-3'}>
                    <h4 className={'text-xl font-bold'}>Resources</h4>
                    <div className={'cursor-pointer md:hidden'} onClick={handleClosed}>{closed ? <PlusIcon/> :
                        <MinusIcon/>}</div>
                </div>
                <div className={`${closed ? 'hidden' : 'block'}`}>
                    <ul>
                        <li>Measurement Guide</li>
                        <li>Size Chart</li>
                        <li>Associates Program</li>
                        <li>Press Kit / Brand Inquiries</li>
                        <li>Site Map</li>
                        <li>Take Survey</li>
                    </ul>
                </div>
                <div className={'hidden md:block'}>
                    <ul className={'flex flex-col gap-4 text-sm'}>
                        <li>Measurement Guide</li>
                        <li>Size Chart</li>
                        <li>Associates Program</li>
                        <li>Press Kit / Brand Inquiries</li>
                        <li>Site Map</li>
                        <li>Take Survey</li>
                    </ul>
                </div>
            </div>
        </>
    )
}