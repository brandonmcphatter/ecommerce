export default function JoinEmail() {
    return (
        <section className={'py-3 bg-blue-300 flex flex-col gap-4 px-6 mb-8 md:items-center'}>
            <div className={'text-2xl font-bold'}>Join Our List for 10% Off</div>
            <p className={'lg:max-w-[800px]'}>Sign up for CoolKix emails - new subscribers get 10% off a future order! Plus, get early access to
                sales, coupons, and more.</p>
            <div className={'w-full lg:max-w-[800px]'}>
                <form className={'flex flex-col md:flex-row gap-5'}>
                    <input className={' md:w-3/4 px-3 py-3 border rounded'} type="email" placeholder={'Email Address'} required={true}/>
                    <button className={' md:w-1/4 bg-black text-white rounded py-2 text-nowrap'}>Join the CoolKids</button>
                </form>
            </div>

        </section>
    )
}