'use client'

import About from "@/components/FooterSection/About";
import CustomerService from "@/components/FooterSection/CustomerService";
import Resources from "@/components/FooterSection/Resources";
import Explore from "@/components/FooterSection/Explore";

export default function FooterSection() {

    return (
        <footer className={'py-4'}>
            <div>

            </div>
            <div className={'flex flex-col md:flex-row md:justify-evenly  gap-4'}>
                <About/>
                <CustomerService/>
                <Resources/>
                <Explore/>
            </div>

        </footer>
    )
}

