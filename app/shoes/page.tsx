export default function Shoes() {
    return (
        <div className={'h-svh flex'}>
            <div className={'hidden md:flex md:w-1/3 lg:w-1/4 bg-blue-400'}>SideBar</div>
            <div className={'w-full md:w-2/3 lg:w-3/4 bg-green-300'}>DisplayArea</div>
        </div>
    )
}