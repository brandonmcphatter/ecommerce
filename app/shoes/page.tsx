export default function Shoes() {
    return (
        <div className={'h-svh flex'}>
            <div className={'hidden md:flex md:w-1/4 lg:w-1/3 bg-blue-300'}>SideBar</div>
            <div className={'w-full md:w-3/4 lg:w-2/3 bg-green-300'}>DisplayArea</div>
        </div>
    )
}