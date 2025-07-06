import { useState } from 'react'
import { HeartIcon, StarIcon } from './Icons'

const ProductCard = ({ 
  product,
  showQuickView = true,
  showWishlist = true,
  showRating = true,
  className = ""
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleColorSelect = (index) => {
    setSelectedColorIndex(index)
  }

  return (
    <div className={`group relative bg-gray-800 rounded-lg overflow-hidden hover-lift transition-all duration-300 ${className}`}>
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.images?.[selectedColorIndex] || product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white text-gray-900 px-2 py-1 text-xs font-semibold rounded animate-scale-in">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded animate-scale-in">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        {showWishlist && (
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all duration-200 hover-scale focus-ring opacity-0 group-hover:opacity-100"
          >
            <HeartIcon 
              size={16} 
              filled={isWishlisted}
              className={isWishlisted ? 'text-red-500' : 'text-white'}
            />
          </button>
        )}

        {/* Quick View Button */}
        {showQuickView && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-white text-gray-900 py-2 px-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-200 focus-ring">
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mb-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorSelect(index)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover-scale focus-ring ${
                  selectedColorIndex === index 
                    ? 'border-white' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Product Name */}
        <h3 className="text-white font-semibold text-lg mb-1 font-montserrat group-hover:text-gray-300 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="text-gray-400 text-sm mb-2 font-inter">
            {product.description}
          </p>
        )}

        {/* Product Color/Variant */}
        {product.color && (
          <p className="text-gray-500 text-sm mb-2 font-inter">
            {product.color}
          </p>
        )}

        {/* Rating */}
        {showRating && product.rating && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={14}
                filled={i < Math.floor(product.rating)}
                className="text-yellow-400"
              />
            ))}
            <span className="text-gray-400 text-sm ml-1 font-inter">
              ({product.reviewCount || 0})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg font-poppins">
            ${product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-gray-500 line-through text-sm font-poppins">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Size Options */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex gap-2 mt-3">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className="px-3 py-1 border border-gray-600 text-gray-300 text-sm hover:border-white hover:text-white transition-colors duration-200 focus-ring"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard

