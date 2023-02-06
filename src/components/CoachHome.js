import {Link} from 'react-router-dom';

const CoachHome = () => {
  return (
    <>
      <nav className="flex justify-between bg-[#111] text-white p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>
        <p>Call Us: 123 123434443</p>
      </nav>
      <h1>Welcome to Coach Home</h1>
    </>
  );
};

export default CoachHome;
