import { useNavigate } from "react-router-dom";
const ConfirmAppointment = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-[#CAD5E2] h-screen flex items-center justify-center">
                <div className="flex flex-col border-2 text-lg gap-2 bg-[#03203C] text-white rounded border-black w-[500px] p-5 h-[200px] items-center mx-auto justify-center">
                    <h1>Your appointment is scheduled successfully</h1>
                    <button className="bg-[#12B0E8] w-[80px] rounded text-white" onClick={() =>{navigate("/dashboard")}}>Go Back</button>
                </div>
            </div>
            
        </>
    )
}

export default ConfirmAppointment;