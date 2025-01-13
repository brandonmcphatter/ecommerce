import {MagnifyingGlass, MenuToggle, ProfileIcon, ShoppingBag} from "@/components/generalUse/NavBar/Icons";

export default function NavBar() {
    return (
        <nav className={'flex justify-between items-center py-2 border-b px-6 mb-3'}>
            <div>
                <h1 className={'text-2xl font-bold'}>CoolKix</h1>
            </div>
            <div className={'flex gap-5'}>
                <span className={''}><MagnifyingGlass /></span>
                <ShoppingBag />
                <MenuToggle />
                <span className={'hidden md:flex'}><ProfileIcon /></span>
            </div>
        </nav>

    )
}

