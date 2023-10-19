const Contact = () => {
    return (
      <div className="bg-gray-400/100 flex justify-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* General Request */}
          <div className="bg-yellow-300/25 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-black">General Request</h2>
            <p className="mt-4 text-black">
              Do you have general questions or inquiries? Contact us.
            </p>
            <button className="btn bg-[#A3A7D2] border-hidden mt-6">Contact us</button>
          </div>
  
          {/* Service Request */}
          <div className="bg-red-600/20 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-black">Service Request</h2>
            <p className="mt-4 text-black">
              Need help with our services? Do not hesitate to reach out.
            </p>
            <button className="btn bg-[#A3A7D2] border-hidden mt-6">Contact us</button>
          </div>
  
          {/* Accounting/Billing Request */}
          <div className="bg-blue-700/20 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-black">Accounting/Billing Request</h2>
            <p className="text-black mt-4">
              For accounting or billing-related inquiries, contact us.
            </p>
            <button className="btn bg-[#A3A7D2] border-hidden mt-6">Contact us</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  