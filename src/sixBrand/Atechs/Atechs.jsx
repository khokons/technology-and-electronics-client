import { useLoaderData } from "react-router-dom";
import Atech from "./Atech";

const Atechs = () => {

    const aTech = useLoaderData()
    console.log(aTech);
  

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-400 mt-10">
            {
                aTech.map(tec => <Atech key={tec._id} tec={tec}></Atech>)
            }
            
        </div>
    );
};

export default Atechs;