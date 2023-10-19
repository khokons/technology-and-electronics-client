import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const techsinfo = useLoaderData()

    return (
        <div className="bg-gray-400">
        <h2 className="text-center py-10 text-4xl font-bold text-black">Total Product : {techsinfo.length}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {
               techsinfo.map(tech => <Product key={tech._id} tech={tech}></Product>) 
            }
        </div>

        
        </div>
    );
};

export default Products;