import { useState } from "react";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="font-inter bg-gray-800 py-2 text-center text-sm text-gray-300">
        Free Domestic Shipping over $120 and 30 Day Returns
      </div>

      {/* Main Header */}
      <header className="animate-fade-in sticky top-0 z-50 border-b border-gray-700 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage("home")}
                className="font-montserrat hover-glow text-2xl font-bold tracking-wider text-white transition-all duration-300"
              >
                FitWorld Shop
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 lg:flex">
              <button
                onClick={() => setCurrentPage("women")}
                className="font-poppins hover-lift font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                WOMEN
              </button>
              <button
                onClick={() => setCurrentPage("men")}
                className="font-poppins hover-lift font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                MEN
              </button>
              <button
                onClick={() => setCurrentPage("accessories")}
                className="font-poppins hover-lift font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                ACCESSORIES
              </button>
              <button
                onClick={() => setCurrentPage("alphaland")}
                className="font-poppins hover-lift font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                PROMOCIONES
              </button>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover-scale focus-ring p-2 text-gray-300 transition-colors duration-200 hover:text-white">
                <SearchIcon size={20} />
              </button>
              <button className="hover-scale focus-ring p-2 text-gray-300 transition-colors duration-200 hover:text-white">
                <UserIcon size={20} />
              </button>
              <button className="hover-scale focus-ring relative p-2 text-gray-300 transition-colors duration-200 hover:text-white">
                <ShoppingBagIcon size={20} />
                <span className="animate-scale-in absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900">
                  0
                </span>
              </button>
              <button
                className="hover-scale focus-ring p-2 text-gray-300 transition-colors duration-200 hover:text-white lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-slide-in-left border-t border-gray-700 bg-gray-800 lg:hidden">
            <div className="space-y-1 px-4 py-2">
              <button
                onClick={() => {
                  setCurrentPage("women");
                  setIsMenuOpen(false);
                }}
                className="font-poppins block w-full px-3 py-2 text-left font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                WOMEN
              </button>
              <button
                onClick={() => {
                  setCurrentPage("men");
                  setIsMenuOpen(false);
                }}
                className="font-poppins block w-full px-3 py-2 text-left font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                MEN
              </button>
              <button
                onClick={() => {
                  setCurrentPage("accessories");
                  setIsMenuOpen(false);
                }}
                className="font-poppins block w-full px-3 py-2 text-left font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                ACCESORIOS
              </button>
              <button
                onClick={() => {
                  setCurrentPage("alphaland");
                  setIsMenuOpen(false);
                }}
                className="font-poppins block w-full px-3 py-2 text-left font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                PROMOCIONES
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
