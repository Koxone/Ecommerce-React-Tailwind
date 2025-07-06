import { useState } from "react";
import { HeartIcon, StarIcon } from "./Icons";

const ProductCard = ({
  product,
  showQuickView = true,
  showWishlist = true,
  showRating = true,
  className = "",
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleColorSelect = (index) => {
    setSelectedColorIndex(index);
  };

  return (
    <div
      className={`group hover-lift relative max-w-[300px] overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 md:max-h-fit md:max-w-[300px] ${className}`}
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden md:h-fit md:w-full">
        <img
          src={product.images?.[selectedColorIndex] || product.image}
          alt={product.name}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:max-h-[300px] md:w-full md:object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="animate-scale-in rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="animate-scale-in rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        {showWishlist && (
          <button
            onClick={handleWishlistToggle}
            className="bg-opacity-50 hover:bg-opacity-75 hover-scale focus-ring absolute top-3 right-3 rounded-full bg-black p-2 opacity-0 transition-all duration-200 group-hover:opacity-100"
          >
            <HeartIcon
              size={16}
              filled={isWishlisted}
              className={isWishlisted ? "text-red-500" : "text-white"}
            />
          </button>
        )}

        {/* Quick View Button */}
        {showQuickView && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="focus-ring w-full rounded bg-white px-4 py-2 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100">
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Bottom Product Info */}
      <div className="p-4">
        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-3 flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorSelect(index)}
                className={`hover-scale focus-ring h-6 w-6 rounded-full border-2 transition-all duration-200 ${
                  selectedColorIndex === index
                    ? "border-white"
                    : "border-gray-600 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-montserrat mb-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-gray-300">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="font-inter mb-2 text-sm text-gray-400">
            {product.description}
          </p>
        )}

        {/* Product Color/Variant */}
        {product.color && (
          <p className="font-inter mb-2 text-sm text-gray-500">
            {product.color}
          </p>
        )}

        {/* Rating */}
        {showRating && product.rating && (
          <div className="mb-2 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={14}
                filled={i < Math.floor(product.rating)}
                className="text-yellow-400"
              />
            ))}
            <span className="font-inter ml-1 text-sm text-gray-400">
              ({product.reviewCount || 0})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-poppins text-lg font-bold text-white">
            ${product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="font-poppins text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Size Options */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-3 flex gap-2">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className="focus-ring border border-gray-600 px-3 py-1 text-sm text-gray-300 transition-colors duration-200 hover:border-white hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
