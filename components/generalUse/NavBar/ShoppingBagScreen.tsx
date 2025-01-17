import {CloseIcon, ProfileIcon} from "@/components/generalUse/NavBar/Icons";

export default function ShoppingBagScreen({toggleBag}: {toggleBag: () => void }) {
    return (
        <div className={'absolute inset-x-0 top-0 h-svh'}>
            <div className={'flex justify-between'}>
                <ProfileIcon />
                <span onClick={toggleBag}><CloseIcon /></span>
            </div>
        </div>
    )
}