import { useState } from "react";
import {
  HeartIcon,
  StarIcon,
  ShareIcon,
  PlusIcon,
  MinusIcon,
} from "../components/Icons";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const ProductDetail = ({ productId }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

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
      {/* Breadcrumb */}
      <div className="bg-gray-800 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="font-inter text-sm">
            <a
              href="/"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Home
            </a>
            <span className="mx-2 text-gray-500">/</span>
            <a
              href="/women"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Women
            </a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="animate-slide-in-left">
            <Carousel
              items={carouselItems}
              autoPlay={false}
              showDots={true}
              showArrows={true}
              className="mb-6"
            />
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 bg-gray-800 transition-all duration-200 hover:scale-105 ${
                    selectedColor === index
                      ? "border-white"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right">
            {product.isNew && (
              <span className="mb-4 inline-block rounded bg-white px-3 py-1 text-xs font-semibold text-gray-900">
                NEW
              </span>
            )}
            <h1 className="font-montserrat mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="font-inter mb-4 text-base text-gray-300 md:text-lg">
              {product.description}
            </p>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    filled={i < Math.floor(product.rating)}
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl font-bold text-white md:text-3xl">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="rounded bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                    Save ${product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold md:text-base">
                Color: {product.colors[selectedColor]?.name}
              </h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`h-10 w-10 rounded-full border-2 transition duration-200 hover:scale-110 ${
                      selectedColor === index
                        ? "border-white"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold md:text-base">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition duration-200 ${
                      selectedSize === size
                        ? "border-white bg-white text-gray-900"
                        : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="mt-2 text-xs text-gray-400 underline hover:text-white">
                Size Guide
              </button>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold md:text-base">
                Quantity
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="rounded bg-gray-700 p-2 hover:bg-gray-600"
                >
                  <MinusIcon size={14} />
                </button>
                <span className="px-3 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="rounded bg-gray-700 p-2 hover:bg-gray-600"
                >
                  <PlusIcon size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:text-base">
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`rounded-lg border p-3 transition ${
                  isWishlisted
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
                }`}
              >
                <HeartIcon size={18} filled={isWishlisted} />
              </button>
              <button className="rounded-lg border border-gray-600 p-3 text-gray-300 transition hover:border-white hover:text-white">
                <ShareIcon size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-700 pt-6">
              <div className="mb-4 flex gap-4">
                {["description", "features", "care"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium capitalize transition ${
                      activeTab === tab
                        ? "border-b-2 border-white text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                {activeTab === "description" && (
                  <p>{product.fullDescription}</p>
                )}
                {activeTab === "features" && (
                  <ul className="list-disc space-y-1 pl-5">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                {activeTab === "care" && <p>{product.care}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
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

export default ProductDetail;
