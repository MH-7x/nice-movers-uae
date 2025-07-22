import React from "react";

const Prices = () => {
  return (
    <section id="house-shifting-price" className="md:px-0 px-3 mt-36">
      <h2 className="text-center max-w-2xl font-bold mb-5 mx-auto  md:text-4xl text-2xl b-red">
        House Shifting Services Cost in Dubai
      </h2>
      <p className="max-w-4xl md:text-base text-sm mx-auto text-center b-text">
        The cost of Nice Movers and usually the other packers and movers in
        Dubai of house shifting depends on the capacity or size of stuff as well
        as of your moving requirements. But You can estimate to pay the
        following cost.
      </p>
      <div className="overflow-x-auto p-4 mt-5">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
          <table className="min-w-full table-auto text-sm sm:text-base">
            <thead className="b-red-bg b-white">
              <tr>
                <th className="px-6 py-4 text-left">Moving Size</th>
                <th className="px-6 py-4 text-left">Cost Range (AED)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">Studio</td>
                <td className="px-6 py-4">AED 650 - 1050</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="px-6 py-4">1 BHK</td>
                <td className="px-6 py-4">AED 950 - 1450</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">2 BHK</td>
                <td className="px-6 py-4">AED 1350 - 1950</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="px-6 py-4">3 BHK (Apartment)</td>
                <td className="px-6 py-4">AED 1950 - 2850</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">3 BHK (Villa)</td>
                <td className="px-6 py-4">AED 2350 - 3250</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="px-6 py-4">5 BHK (Villa)</td>
                <td className="px-6 py-4">AED 3150 - 4350</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="max-w-4xl mt-5  mx-auto text-center b-text">
        But, remember that the final cost depends on different factors like
        <span className="underline underline-offset-4"> volume</span>,
        <span className="underline underline-offset-4"> distance</span> and the
        services you need. Here,there is no need to worry, just contact us and
        get all levels of moving and Packing Services at affordable pricing.
      </p>
    </section>
  );
};

export default Prices;
