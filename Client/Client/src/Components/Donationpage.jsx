export { default as Donationpage } from './Donationpage.jsx';
import React, { useState } from "react";
import img2 from '../Images/dog.jpg';
<source />
const DonationPage = () => {
  const [amount, setAmount] = useState(50);
  const [type, setType] = useState("one-time");

  return (
    <div className="bg-[#f2e1c9] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* LEFT SECTION */}
        <div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="{img2}"
              alt="dog"
              className="w-full h-75 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="text-white px-6">
                <p className="text-sm uppercase text-orange-300">
                  Urgent Appeal
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  Help them find a forever home
                </h2>
                <p className="mt-3 text-sm">
                  Your generous donation provides food, shelter, and medical
                  care for abandoned pets waiting for a loving family.
                </p>
              </div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Medical Care</h4>
              <p className="text-sm text-gray-500 mt-1">
                Vaccinations and emergency surgeries for rescued animals.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Safe Shelter</h4>
              <p className="text-sm text-gray-500 mt-1">
                Warm beds and nutritious food while they wait.
              </p>
            </div>
          </div>

          {/* TRUST BADGES */}
          {/* <div className="flex justify-between text-sm text-gray-600 mt-6">
            <span>🔒 Secure SSL</span>
            <span>⭐ Top Rated</span>
            <span>🏛 Tax Exempt</span>
            <span>👁 Private</span>
          </div>
        </div> */}

        {/* RIGHT SECTION */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-1">
            Make a secure donation
          </h3>
          <p className="text-gray-500 mb-4">
            Join 5,000+ donors helping pets today
          </p> */}

          {/* DONATION TYPE */}
          {/* <div className="flex gap-4 mb-6">
            <button
              onClick={() => setType("one-time")}
              className={`flex-1 py-2 rounded-lg border ${
                type === "one-time"
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
            >
              One-time
            </button>

            <button
              onClick={() => setType("monthly")}
              className={`flex-1 py-2 rounded-lg border ${
                type === "monthly"
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
          </div> */}

          {/* AMOUNT */}
          {/* <div className="grid grid-cols-3 gap-3 mb-4">
            {[25, 50, 100].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`py-2 rounded-lg border font-semibold ${
                  amount === amt
                    ? "bg-orange-100 border-orange-500"
                    : ""
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Other Amount"
            className="w-full border rounded-lg px-3 py-2 mb-6"
          /> */}

          {/* FORM */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-3 py-2 mb-4"
          />

          <div className="grid grid-cols-3 gap-3 mb-4">
            <input
              type="text"
              placeholder="Card Number"
              className="col-span-3 border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="MM / YY"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="CVC"
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
            Donate ${amount} Now →
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            By donating you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;


  