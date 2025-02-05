'use client'

import {CloseIcon, MagnifyingGlass, MenuToggle, ProfileIcon, ShoppingBag} from "@/components/generalUse/NavBar/Icons";
import {useState} from "react";
import ShoppingBagScreen from "@/components/generalUse/NavBar/ShoppingBagScreen";

export default function NavBar() {
    const [showSearch, setShowSearch] = useState(false);
    const [showBag, setShowBag] = useState(false);
    const toggleSearch = () => setShowSearch(!showSearch);
    const toggleBag = () => setShowBag(!showBag);

    return (
        <>
            <nav className={'h-fit flex flex-col gap-4 py-3 border-b px-6 mb-3 relative'}>
                <div>
                    {!showSearch && <div className={'flex justify-between items-center '}>
                        <div>
                            <h1 className={'text-2xl font-bold'}>CoolKix</h1>
                        </div>
                        <div className={'flex gap-5'}>
                            <span onClick={toggleSearch}><MagnifyingGlass/></span>
                            <span onClick={toggleBag}><ShoppingBag/></span>
                            <MenuToggle/>
                            <span className={'hidden md:flex'}><ProfileIcon/></span>
                        </div>
                    </div>}
                </div>

                <div className={'flex justify-between'}>
                    <div>
                        <ul className={'flex gap-7'}>
                            <li>New</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>Collections</li>
                            <li>Brands</li>
                            <li>Sale</li>
                        </ul>
                    </div>
                    <div>Help & Support</div>
                </div>


            </nav>
            {showSearch && <SearchBar toggleSearch={toggleSearch}/>}
            {showBag && <ShoppingBagScreen toggleBag={toggleBag}/>}
        </>

    )
}

function SearchBar({toggleSearch}: { toggleSearch: () => void }) {
    return (
        <div className={'absolute inset-x-0 top-0 '}>
            <div className={'flex items-center gap-2'}>
                <input type="text" placeholder={'Search for shoes'} className={'bg-gray-100 p-2 rounded-lg w-full'}/>
                <span onClick={toggleSearch}><CloseIcon/></span>
            </div>
            <div className={'border-2 rounded p-4'}>
                <p>No Past Searches</p>
            </div>
        </div>
    )
}

