import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import ProductGrid from "../components/ProductGrid";
import { products as allProducts } from "../data/products";
import { smartSearch } from "../utils/search";

const Shop = ({ addToCart, wishlistItems = [], toggleWishlist }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const sizeParam = searchParams.get("size");
  const searchQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "All",
  );
  const [selectedSize, setSelectedSize] = useState(sizeParam || "All");
  const [priceRange, setPriceRange] = useState(300000);

  // Derive unique categories from data
  const categories = useMemo(
    () => ["All", ...new Set(allProducts.map((p) => p.category))],
    [],
  );

  // Standard sizes to filter by
  const availableSizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];

  // Sync state with URL param
  useEffect(() => {
    setSelectedCategory(categoryParam || "All");
    if (sizeParam) {
      setSelectedSize(sizeParam);
    }
  }, [categoryParam, sizeParam]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (category === "All") newParams.delete("category");
      else newParams.set("category", category);
      return newParams;
    });
  };

  // Filter products based on category and price
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // 1. Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Filter by Price
    result = result.filter((p) => p.price <= priceRange);

    // 3. Filter by Size
    if (selectedSize !== "All") {
      result = result.filter((p) =>
        // If product has "ALL" size, it matches ANY size.
        // Otherwise check if it includes the specific size.
        (p.sizes && p.sizes.includes("ALL")) ||
        (p.sizes && p.sizes.includes(selectedSize))
      );
    }

    // 4. Smart Search (Deep & Fuzzy)
    if (searchQuery) {
      result = smartSearch(result, searchQuery);
    }

    return result;
  }, [selectedCategory, priceRange, searchQuery, selectedSize]);

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 animate-fade-in">
      {/* Sidebar Filter */}
      <aside className="md:w-64 flex-shrink-0">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sizes={availableSizes}
          selectedSize={selectedSize}
          onSelectSize={(size) => {
            setSelectedSize(size);
            setSearchParams(prev => {
              const newParams = new URLSearchParams(prev);
              if (size === "All") newParams.delete("size");
              else newParams.set("size", size);
              return newParams;
            });
          }}
        />
      </aside>

      {/* Main Grid */}
      <div className="flex-grow pt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-white uppercase">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : selectedCategory === "All"
                ? "Shop All"
                : `${selectedCategory} Collection`}
          </h1>
          <Sort />
        </div>
        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            addToCart={addToCart}
            wishlistItems={wishlistItems}
            toggleWishlist={toggleWishlist}
            preSelectedSize={selectedSize === "All" ? null : selectedSize}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                handleCategoryChange("All");
                setPriceRange(300000);
                setSearchParams({});
              }}
              className="mt-4 text-red-600 font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
