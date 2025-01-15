'use client'

import {CloseIcon, MagnifyingGlass, MenuToggle, ProfileIcon, ShoppingBag} from "@/components/generalUse/NavBar/Icons";
import {useState} from "react";

export default function NavBar() {
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch(!showSearch);

    return (
        <nav className={'flex flex-col py-3 border-b px-6 mb-3 relative h-16'}>
            {!showSearch && <div className={'flex justify-between items-center '}>
                <div>
                    <h1 className={'text-2xl font-bold'}>CoolKix</h1>
                </div>
                <div className={'flex gap-5'}>
                    <span onClick={toggleSearch}><MagnifyingGlass/></span>
                    <ShoppingBag/>
                    <MenuToggle/>
                    <span className={'hidden md:flex'}><ProfileIcon/></span>
                </div>
            </div>}

            {showSearch && <SearchBar toggleSearch={toggleSearch}/>}
        </nav>

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

