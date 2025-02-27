import React, { useState } from "react";
import { Button } from "../Common/ui/button";

export const CreateListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    sell: false,
    rent: true,
    parkingSpot: false,
    furnished: false,
    offer: true,
    beds: 1,
    baths: 1,
    regularPrice: 0,
    discountedPrice: 0,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl mx-auto p-8  mt-6 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Create a Listing</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded h-32"
              ></textarea>
            </div>

            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sell"
                  name="sell"
                  checked={formData.sell}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-gray-300"
                />
                <label htmlFor="sell" className="ml-2">
                  Sell
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rent"
                  name="rent"
                  checked={formData.rent}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-gray-300"
                />
                <label htmlFor="rent" className="ml-2">
                  Rent
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="parkingSpot"
                  name="parkingSpot"
                  checked={formData.parkingSpot}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-gray-300"
                />
                <label htmlFor="parkingSpot" className="ml-2">
                  Parking spot
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="furnished"
                  name="furnished"
                  checked={formData.furnished}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-gray-300"
                />
                <label htmlFor="furnished" className="ml-2">
                  Furnished
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="offer"
                  name="offer"
                  checked={formData.offer}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-gray-300"
                />
                <label htmlFor="offer" className="ml-2">
                  Offer
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds}
                  onChange={handleInputChange}
                  min="1"
                  className="w-16 p-2 border border-gray-300 rounded"
                />
                <span className="ml-2">Beds</span>
              </div>

              <div>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                  min="1"
                  className="w-16 p-2 border border-gray-300 rounded"
                />
                <span className="ml-2">Baths</span>
              </div>
            </div>

            <div>
              <input
                type="number"
                name="regularPrice"
                value={formData.regularPrice}
                onChange={handleInputChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">
                Regular price ($ / Month)
              </span>
            </div>

            <div>
              <input
                type="number"
                name="discountedPrice"
                value={formData.discountedPrice}
                onChange={handleInputChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">
                Discounted price ($ / Month)
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">
                Images: The first image will be the cover (max 6)
              </p>
              <div className="flex items-center">
                <label className="flex-1">
                  <div className="border border-gray-300 rounded p-2 flex items-center">
                    <button
                      type="file"
                      className="bg-white border border-gray-300 rounded px-3 py-1 text-sm mr-2"
                    >
                      Choose files
                    </button>
                    <span className="text-gray-500">No file chosen</span>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept=".jpg,.png,.jpeg"
                    className="hidden"
                    onChange={(e) => {
                      console.log("Files:", e.target.files);
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  UPLOAD
                </button>
              </div>
            </div>

            <Button variant="secondary">CREATE LISTING</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
