const ExtraTwo = () => {
    return (
      <div className="bg-gray-200 py-16 mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
              <p className="text-black">
                We offer high-quality technology and electronics products that are built to last.
              </p>
            </div>
  
            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-black">
                Our team of experts is dedicated to providing you with the best advice and support.
              </p>
            </div>
  
            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
              <p className="text-black">
                We prioritize customer satisfaction and ensure a seamless shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExtraTwo;
  