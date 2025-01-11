'use client'

import About from "@/components/FooterSection/About";
import CustomerService from "@/components/FooterSection/CustomerService";
import Resources from "@/components/FooterSection/Resources";
import Explore from "@/components/FooterSection/Explore";

export default function FooterSection() {

    return (
        <footer className={'py-4 px-8 mb-4 flex flex-col gap-4 mx-auto md:w-4/5'}>
            <div>

            </div>
            <div className={'flex flex-col md:flex-row md:justify-center md:border-b-2 md:border-dotted pb-4 gap-8'}>
                <About/>
                <CustomerService/>
                <Resources/>
                <Explore/>
            </div>
            <div className={'flex flex-col md:flex-row md:justify-between gap-3 text-xs text-nowrap'}>
                <p className={''}>© 2025 CoolKix. All Rights</p>
                <ul className={'flex gap-2'}>
                    <li>Privacy Policy </li>
                    <li>/</li>
                    <li>Terms of Use</li>
                    <li>/</li>
                    <li>Accessibility</li>
                    <li>/</li>
                    <li>CS (800)927-7671</li>
                </ul>
            </div>
        </footer>
    )
}