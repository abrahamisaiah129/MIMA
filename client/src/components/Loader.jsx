import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="flex flex-col items-center">
                {/* Animated Rings */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-white/50 border-b-transparent border-l-transparent animate-spin-reverse"></div>
                </div>

                {/* Loading Text */}
                <div className="mt-4 text-white text-xs font-bold uppercase tracking-[0.3em] animate-pulse">
                    Loading
                </div>
            </div>
        </div>
    );
};

export default Loader;
