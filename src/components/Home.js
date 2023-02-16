import user from '../images/user.svg';
import CoachLogin from './CoachLogin';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
    
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">

                <Navbar />

                <main className='sm:mb-4'>
                    <h1 className="text-2xl sm:text-4xl font-semibold text-center py-10 ">
                        We are at the heart
                        <span className='block sm:inline'>of appropriate care</span> 
                    </h1>

                    <div className="flex flex-col items-center sm:flex-row gap-2 justify-center mb-4">
                        <div className="text-white bg-black w-[250px] sm:w-[300px] p-10 flex flex-col items-center gap-4">
                            <img src={user} alt="user image" />
                            <div className="bg-[#06B6D4] w-44 h-10 text-center">
                                <Link to="/CoachLogin"><button className="bg-[#06B6D4] w-44 h-10">Login as a Coach</button></Link>
                            </div>
                            <div className="bg-[#06B6D4] w-44 h-10 text-center">
                                <Link to="/CoachSignup"><button className="bg-[#06B6D4] w-44 h-10">Join as a Coach </button></Link>
                            </div>
                        </div>
                        <div className="text-white bg-black w-[250px] sm:w-[300px] p-10 flex flex-col  items-center gap-4">
                            <img src={user} alt="this is image" />
                            <div>
                                <Link to="/userlogin"><button className="bg-[#06B6D4] w-44 h-10">Login as a User</button></Link>
                            </div>
                            <div>
                                <Link to="/usersignup"><button className="bg-[#06B6D4] w-44 h-10 text-center ">Join as a User</button></Link>
                            </div>
                        </div>

                    </div>
                </main>

                <Footer/>
            </div>




        </>
    )
}

export default Home;