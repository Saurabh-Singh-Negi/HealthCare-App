const CoachLogin = () => {
    return (
        <>
            <nav className="flex justify-between bg-[#111] text-white p-4">
                    <h1 className="font-bold text-xl">WeCare</h1>
                    <p>Call Us: 123 123434443</p>
            </nav>

            <div>
                <div>

                </div>

                <form>
                    <input type="text" className="border-2 border-black block" placeholder="Coach id"/>
                    <input type="password" className="border-2 border-black block" placeholder="Password"/>

                    <button type="submit" className="border-2 border-black block cursor-pointer">Login</button>
                </form>
            </div>
        </>
    )
}

export default CoachLogin;