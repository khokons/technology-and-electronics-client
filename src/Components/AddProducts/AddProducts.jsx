import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {image, name, brand, category, price, description, rating}

        console.log(newProduct);

        fetch('https://technology-and-electronics-server-khokons-c1e583e9.vercel.app/techs',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'   
            },
            body: JSON.stringify(newProduct)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully Add Your Product',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

    

  return (
    <div className="bg-gray-400/100 p-24">
      <h2 className="text-3xl text-center font-bold text-black uppercase">Product Add</h2>

      <form onSubmit={handleAddProduct} className="mt-12">
{/* One */}
        <div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
    <span className="label-text uppercase text-lg font-medium text-black">image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Enter your photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text uppercase text-lg font-medium text-black">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
{/* two */}
<div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text uppercase text-lg font-medium text-black">brand name </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Enter your brand name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
     <span className="label-text uppercase text-lg font-medium text-black">category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter your category name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

{/* Category */}
<div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text uppercase text-lg font-medium text-black">price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Enter your price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
     <span className="label-text uppercase text-lg font-medium text-black">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Enter your Short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text uppercase text-lg font-medium text-black">rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Enter your rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>

     
        </div>
        

  <input type="submit" value="ADD BUTTON" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddProducts;