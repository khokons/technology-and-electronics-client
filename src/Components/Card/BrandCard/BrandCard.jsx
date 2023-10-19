/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = ({card}) => {

    const {id, brand_img, brand_name} = card;


  return (
    <div className="relative flex w-[400px] flex-col rounded-xl bg-clip-border shadow-md">
      <div className="relative mx-4 mt-4 h-[300px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={brand_img} className="h-full w-full object-cover" />
      </div>
  
      <div className="p-6 pt-0 mt-4">
      <Link to={`/atechs/${id}`}>
      <button
          className="block w-full select-none rounded-lg bg-[#A3A7D2] py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
            {brand_name}
        </button>
      </Link>
      </div>
    </div>
  );
};

export default BrandCard;