import { useState } from "react";

import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/nav/Breadcrumb";
import ProductDetail from "../components/product/ProductDetail.jsx";

const ProductDetailView = ({ productId }) => {
  // Sample product data
  const product = {
    id: 1,
    name: "Pump Legging",
    description: "Women's Seamless Legging",
    fullDescription:
      "Engineered over two years. Glute-lifting technology that sets a new standard. These leggings feature our revolutionary seamless construction with targeted compression zones for optimal performance and comfort.",
    color: "Emerald Green",
    price: 70,
    originalPrice: 85,
    images: [
      "/MainBanner.jpg",
      "/MainBanner2.jpg",
      "/MainBanner3.webp",
      "/Muestra.jpg",
    ],
    colors: [
      { name: "Emerald Green", value: "#047857" },
      { name: "Charcoal", value: "#1F2937" },
      { name: "Purple", value: "#7C3AED" },
      { name: "Navy", value: "#1E3A8A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 203,
    isNew: true,
    features: [
      "Seamless construction",
      "Glute-lifting technology",
      "Moisture-wicking fabric",
      "Four-way stretch",
      "High-waisted design",
    ],
    materials: "78% Nylon, 22% Spandex",
    care: "Machine wash cold, hang dry",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Sandy Bra",
      description: "Women's Seamless Scrunch Bra",
      color: "Acai Berry",
      price: 48,
      image: "/promo1.jpg",
      colors: ["#8B5CF6", "#1F2937"],
      rating: 4.5,
      reviewCount: 128,
      category: "women",
    },
    {
      id: 3,
      name: "Pump Short",
      description: "Women's Seamless Short",
      color: "Emerald Green",
      price: 50,
      image: "/promo2.webp",
      colors: ["#10B981", "#1F2937"],
      rating: 4.8,
      reviewCount: 95,
      isNew: true,
      category: "women",
    },
    {
      id: 4,
      name: "Push Tank",
      description: "Women's 2 in 1 Seamless Tank",
      color: "Emerald Green",
      price: 46,
      image: "/promo3.webp",
      colors: ["#059669", "#DC2626"],
      rating: 4.3,
      reviewCount: 67,
      category: "women",
    },
  ];

  const carouselItems = product.images.map((image, index) => (
    <div
      key={index}
      className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800"
    >
      <img
        src={image}
        alt={`${product.name} view ${index + 1}`}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  ));

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Breadcrumb product={product} />

      {/* Product Detail */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ProductDetail
          activeTab={activeTab}
          carouselItems={carouselItems}
          product={product}
          handleQuantityChange={handleQuantityChange}
          isWishlisted={isWishlisted}
          quantity={quantity}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setActiveTab={setActiveTab}
          setIsWishlisted={setIsWishlisted}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
        />

        {/* Related Products */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
