import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import car from "../assests/pics/car.png"

const CarCard = ({ name, brand, price, rating, image }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-[261px] h-[296px]">
    <img src={image} alt={name} className=" object-cover w-[210px] h-[98px] " />
    <h3 className="text-24px font-semibold mt-4">{name}</h3>
    <p className="text-gray-500">{brand}</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-red-500 text-lg font-bold">{price}</span>
      <div className="flex items-center">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="text-gray-500">{rating}</span>
      </div>
    </div>
  </div>
);

export default function BookyourCar(){

    const cars = [
        { name: 'M3 Competition', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'M135I Xdrive', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'M2 Competition', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'M4 Competition', brand: 'McLaren', price: '$240.00', rating: 4.9, image: car },
        { name: 'M5 Competition', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'X3 m', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'X4 m', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
        { name: 'Z4', brand: 'BMW', price: '$240.00', rating: 4.9, image: car },
      ];


  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h2 className="text-gray-400 uppercase">Cars</h2>
          <h1 className="text-4xl font-bold">
            Book Your car <span className="text-orange-500">today!</span>
          </h1>
          <p className="text-gray-500 mt-2">auctor imperdiet eu malesuada eu id</p>
        </header>

        <div className="flex space-x-4 mb-8">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Featured</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">On sale</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Good Rate</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Sub nav</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-auto flex items-center">
            Recently Added
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md flex items-center">
            Next Page
            <FaArrowRight className="ml-2" />
          </button>
          <div className="text-gray-500">
            Page <input type="text" value="1" className="w-8 text-center mx-2 border rounded-md" /> of 200
          </div>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <FaArrowLeft className="mr-2" />
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};


