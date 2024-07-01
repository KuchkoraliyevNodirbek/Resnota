import React from "react";
// ProductCard.js
const ProductCard = ({ img, title, text, price, oldPrice }) => {
  return (
    <div
      className="product-card bg-white shadow-md rounded-lg p-4"
      style={{ width: "285px" }}
    >
      <div className="flex justify-between items-start">
        <span className="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
          Скидка
        </span>
        <svg
          className="w-6 h-6 text-gray-400 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mt-2"
      />
      <h2 className="text-lg font-semibold text-gray-800 mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{text}</p>
      <p className="text-2xl font-bold text-gray-800 mt-4">{price}</p>
      <p className="text-gray-400 line-through mt-1">{oldPrice}</p>
      <div className="flex items-center mt-2">
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
          -15%
        </span>
        <span className="text-gray-500 text-sm ml-2">Экономия 160 ₽</span>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Купить
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
          В 1 клик
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
