import React, { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import { ChevronRight, ChevronLeft } from "lucide-react";

const PaginatedSection = ({ title, products, addToCart, cartItems, removeFromCart, subtitle, viewAllLink, wishlistItems, toggleWishlist }) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsPerPage(4); // 2 cols * 2 rows = 4
            } else if (width < 1024) {
                setItemsPerPage(8); // 4 cols * 2 rows = 8
            } else {
                setItemsPerPage(10); // 5 cols * 2 rows = 10
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const displayedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(p => p + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(p => p - 1);
    };

    return (
        <section className="mb-24 animate-slide-up delay-100">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-white uppercase mb-2">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-400 font-medium">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* View All Link - Show only if provided */}
                {viewAllLink && (
                    <div className="hidden sm:block">
                        {viewAllLink}
                    </div>
                )}
            </div>

            <ProductGrid products={displayedProducts} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />

            {/* Pagination Controls - Breadcrumb/Pill style as requested */}
            {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${currentPage === 1
                            ? "text-gray-600 border-white/5 cursor-not-allowed"
                            : "text-white border-white/20 hover:bg-white hover:text-black hover:border-white cursor-pointer"
                            }`}
                    >
                        <ChevronLeft size={14} />
                        Prev
                    </button>

                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${currentPage === totalPages
                            ? "text-gray-600 border-white/5 cursor-not-allowed"
                            : "text-white border-white/20 hover:bg-white hover:text-black hover:border-white cursor-pointer"
                            }`}
                    >
                        Next
                        <ChevronRight size={14} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default PaginatedSection;
