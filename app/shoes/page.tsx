export default function Shoes() {
    return (
        <div className={'h-svh flex'}>
            <div className={'hidden md:flex md:w-1/3 lg:w-1/4 bg-blue-400'}>
                <SideBar/>
            </div>
            <div className={'w-full md:w-2/3 lg:w-3/4 bg-green-300'}>DisplayArea</div>
        </div>
    )
}

function SideBar() {

    return (
        <ul className={'mx-auto'}>
            <li className={'sideBarItem'}>Women&#39;s Shoe Size</li>
            <li className={'sideBarItem'}>Men&#39;s Shoe Size</li>
            <li className={'sideBarItem'}>Kids&#39; Show Size</li>
            <li className={'sideBarItem'}>Brand</li>
            <li className={'sideBarItem'}>Color</li>
            <li className={'sideBarItem'}>Gender</li>
            <li className={'sideBarItem'}>Product Type</li>
            <li className={'sideBarItem'}>Sale</li>
            <li className={'sideBarItem'}>Price</li>
        </ul>
    )
}