import { Link } from "react-router-dom";


const ExtraOne = () => {
    return (
      
  
      <div className="bg-blue-600 text-white py-16 mt-10">
        <div className="flex justify-evenly">
          <h1 className="text-4xl font-semibold">GET IN TOUCH WITH US TODAY!</h1>
         <Link to='/contact'>
         <button className="btn bg-[#A3A7D2] border-hidden ">Contact us</button>
         </Link>
        </div>
      </div>

   
 


    );
};

export default ExtraOne;