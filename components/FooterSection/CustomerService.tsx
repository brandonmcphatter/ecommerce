import {useState} from "react";
import {MinusIcon, PlusIcon} from "@/components/FooterSection/Icons";

export default function CustomerService() {
    const [closed, setClosed] = useState(true);
    const handleClosed = () => {
        setClosed(!closed);
    }
    return (
        <>
            <div className={'md:flex md:flex-col gap-4'}>
                <div className={'flex justify-between border-b border-dotted md:border-none pb-3'}>
                    <h4 className={'text-xl font-bold'}>Customer Service</h4>
                    <div className={'cursor-pointer md:hidden'} onClick={handleClosed}>{closed ? <PlusIcon/> :
                        <MinusIcon/>}</div>
                </div>
                <div className={`${closed ? 'hidden' : 'block'}`}>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Info</li>
                        <li>Shipping / Return Policy</li>
                        <li>Proposition 65</li>
                    </ul>
                </div>
                <div className={'hidden md:block'}>
                    <ul className={'flex flex-col gap-4 text-sm'}>
                        <li>FAQs</li>
                        <li>Contact Info</li>
                        <li>Shipping / Return Policy</li>
                        <li>Proposition 65</li>
                    </ul>
                </div>
            </div>
        </>
    )
}