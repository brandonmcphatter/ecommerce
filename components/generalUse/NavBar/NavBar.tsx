'use client'

import {CloseIcon, MagnifyingGlass, MenuToggle, ProfileIcon, ShoppingBag} from "@/components/generalUse/NavBar/Icons";
import {useState} from "react";
import ShoppingBagScreen from "@/components/generalUse/NavBar/ShoppingBagScreen";
import Link from "next/link";

export default function NavBar() {
    const [showSearch, setShowSearch] = useState(false);
    const [showBag, setShowBag] = useState(false);
    const toggleSearch = () => setShowSearch(!showSearch);
    const toggleBag = () => setShowBag(!showBag);

    return (
        <>
            <div className={'text-sm md:text-base h-10 bg-blue-100 text-center flex justify-center items-center'}>
                Trending in 2025: Shop the  <span className={'font-bold underline ms-1'}> Top 10 Shoes for Spring</span>
            </div>
            <nav className={'h-fit flex flex-col gap-4 py-3 border-b px-6 mb-3 relative'}>
                <div>
                    {!showSearch && <div className={'flex justify-between items-center '}>
                        <div>
                            <Link href={'/'}>
                                <h1 className={'text-2xl font-bold'}>CoolKix</h1>
                            </Link>
                        </div>
                        <div className={'flex gap-5'}>
                            <span onClick={toggleSearch}><MagnifyingGlass/></span>
                            <span onClick={toggleBag}><ShoppingBag/></span>
                            <MenuToggle/>
                            <span className={'hidden md:flex'}><ProfileIcon/></span>
                        </div>
                    </div>}
                </div>

                <div className={'hidden md:flex justify-between'}>
                    <div>
                        <ul className={'flex gap-7'}>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>New</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Women</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Men</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Kids</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Collections</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Brands</Link></li>
                            <li className={'hover:font-semibold'}><Link href={'/shoes'}>Sale</Link></li>
                        </ul>
                    </div>
                    <div>Help & Support</div>
                </div>


            {showSearch && <SearchBar toggleSearch={toggleSearch}/>}
            {showBag && <ShoppingBagScreen toggleBag={toggleBag}/>}
            </nav>
        </>

    )
}

function SearchBar({toggleSearch}: { toggleSearch: () => void }) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center gap-3'}>
                <input type="text" placeholder={'Search for shoes'} className={'bg-gray-100 p-2 rounded-lg w-full'}/>
                <span onClick={toggleSearch}><CloseIcon/></span>
            </div>
            <div className={'rounded p-4  h-36'}>
                <p>No Past Searches</p>
            </div>
        </div>
    )
}

