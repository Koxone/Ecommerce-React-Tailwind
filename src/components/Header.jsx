import { useState } from "react";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";
import HeaderButton from "./buttons/HeaderButton";
import Cart from "./Cart";

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const headerButtons = [
    { text: "MUJER", value: "women" },
    { text: "HOMBRE", value: "men" },
    { text: "ACCESORIOS", value: "accessories" },
    { text: "NOVEDADES", value: "new" },
    { text: "OFERTAS", value: "sale" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-800 py-2 text-center text-sm text-gray-300">
        Envios gratis el mismo dia en Ciudad de Mexico
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-2xl font-bold tracking-wider text-white"
              >
                FitWorld Shop
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 lg:flex">
              {headerButtons.map(({ text, value }) => (
                <HeaderButton
                  key={value}
                  text={text}
                  onClick={() => setCurrentPage(value)}
                />
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-white">
                <SearchIcon size={20} />
              </button>
              <button className="p-2 text-gray-300 hover:text-white">
                <UserIcon size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-gray-300 hover:text-white"
              >
                <ShoppingBagIcon size={20} />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900">
                  0
                </span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-300 hover:text-white lg:hidden"
              >
                {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Cart Component */}
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute right-0 w-full bg-gray-800 lg:hidden">
            <div className="flex flex-col items-end p-2">
              {headerButtons.map(({ text, value }) => (
                <HeaderButton
                  key={value}
                  text={text}
                  onClick={() => {
                    setCurrentPage(value);
                    setIsMenuOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
