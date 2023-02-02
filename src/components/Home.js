import user from '../images/user.svg';
import CoachLogin from './CoachLogin';

const Home = () => {
    return (
        <>
            <div className="container">

                <nav className="flex justify-between bg-[#111] text-white p-4">
                    <h1 className="font-bold text-xl">WeCare</h1>
                    <p>Call Us: 123 123434443</p>
                </nav>

                <main className="bg-[#CAD5E2] h-screen">
                    <h1 className="text-4xl font-semibold text-center py-20 ">
                        We are at the heart of appropriate care
                    </h1>

                    <div className="flex gap-2 justify-center">
                        <div className="text-white bg-black  w-1/6 p-10 flex flex-col  items-center gap-4">
                            <img src={user} alt="this is image" />
                            <div className="bg-[#06B6D4] py-2 px-6">
                                <button onClick={ CoachLogin }>Login as a Coach</button>
                            </div>
                            <div className="bg-[#06B6D4] py-2 px-6">
                                <button>Join as a Coach </button>
                            </div>
                        </div>
                        <div className="text-white bg-black w-1/6 p-10 flex flex-col  items-center gap-4">
                            <img src={user} alt="this is image" />
                            <div>
                                <button className="bg-[#06B6D4] py-2 px-6">Login as a User</button>
                            </div>
                            <div>
                                <button className="bg-[#06B6D4] py-2 px-6">Join as a User</button>
                            </div>
                        </div>

                    </div>
                </main>

                <footer className="bg-[#111] text-white text-center p-5">
                    <p>Copyright &copy 2023, WeCare. All rights reserved.</p>
                </footer>
            </div>




        </>
    )
}

export default Home;