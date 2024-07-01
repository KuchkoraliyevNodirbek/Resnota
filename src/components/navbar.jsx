import React from "react";
import logo from "../img/logo.png";
import starts from "../img/stars.png";
import korzinka from "../img/korzinka.png";
import card from "../img/card.png";

const Navbar = () => {
  return (
    <section>
      <div className="navbar-top flex items-center justify-between container">
        <div className="navbar-top-right flex items-center ">
          <img src={logo} alt="" />
          <p className="px-5">
            Колбасы и мясные <br />
            деликатесы
          </p>
        </div>
        <div className="navbar-top-left flex items-center">
          <img src={starts} alt="" className="p-5" />
          <div className=" bg-slate-300 py-3 px-3 rounded-[10px]">
            <img src={korzinka} alt="" />
          </div>
          <div className="px-4">
            <span>Товаров: 3</span>
            <p className="text-gray-600 font-bold">6 540 ₽</p>
          </div>
        </div>
      </div>

      <div className="navbar-link bg-redd-blue p-5 ">
        <div className="navbar-links container flex justify-between items-center ">
          <div className="navbar-link-left flex space-x-4">
            <a
              href="#"
              className="text-white py-2 px-4 rounded hover:text-blue-700"
            >
              О ресноте
            </a>
            <a
              href="#"
              className="text-white py-2 px-4 rounded hover:text-blue-700"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-white py-2 px-4 rounded hover:text-blue-700"
            >
              Наши магазины
            </a>
            <a
              href="#"
              className="text-white py-2 px-4 rounded hover:text-blue-700"
            >
              Контакты
            </a>
          </div>
          <div className="navbar-link-right">
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-48 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                placeholder="Поиск по сайту"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner bg-custom-banner bg-cover bg-center h-[540px]">
        <div className=" container">
          <div className="text-white py-24 ">
            <h1 className=" xl:text-xl">Истина в качестве</h1>
            <p className="w-[300px]   sm:text-base py-5">
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button className=" bg-redd-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Купить
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-4 p-4 ">
          {/* <!-- Kolbasnye i myasnye izdelia --> */}
          <div className="col-span-2 row-span-2 bg-red-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">
              Колбасные и мясные изделия
            </h2>
            <p className="text-white">Цена от 150 ₽</p>
            <p className="text-white">56 товаров</p>
          </div>
          {/* <!-- Molochnye produkty --> */}
          <div className="bg-green-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Молочные продукты</h2>
            <p className="text-white">Сыры, Десерты, Йогурты...</p>
          </div>
          {/* <!-- Moreprodukty --> */}
          <div className="bg-teal-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Морепродукты</h2>
            <p className="text-white">Рыба, Икра, Креветки</p>
          </div>
          {/* <!-- Pivo --> */}
          <div className="col-span-2 bg-yellow-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Пиво</h2>
            <p className="text-white">Крафтовое пиво</p>
          </div>
          {/* <!-- Zamorozhennye produkty --> */}
          <div className="bg-green-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">
              Замороженные продукты
            </h2>
            <p className="text-white">
              Замороженные овощи, Замороженные фрукты
            </p>
          </div>
          {/* <!-- Myod --> */}
          <div className="bg-blue-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Мёд</h2>
            <p className="text-white">Мёд горный 0,25 кг...</p>
          </div>
          {/* <!-- Svezhie ovoshchi --> */}
          <div className="bg-purple-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Свежие овощи</h2>
            <p className="text-white">Картофель, Огурцы, Помидоры</p>
          </div>
          {/* <!-- Svezhie frukty --> */}
          <div className="bg-orange-500 p-4 bg-custom-banner bg-cover bg-center">
            <h2 className="text-white text-xl font-bold">Свежие фрукты</h2>
            <p className="text-white">Сезонные яблоки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
