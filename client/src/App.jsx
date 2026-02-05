import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Wallet from "./components/Wallet";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";
import ProductDetails from "./components/ProductDetails";
import CheckoutForm from "./components/CheckoutForm";
import WhatsAppButton from "./components/WhatsAppButton"; // Updated import name
import ScrollToTop from "./components/ScrollToTop";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import TrackOrder from "./pages/TrackOrder";

import { profile } from "./data/profile"; // Import profile data
import { products } from "./data/products"; // Import products data

function App() {


  // Initialize wishlist from profile data IDs
  const initialWishlist = profile.wishlist.map(id => products.find(p => p.id === id)).filter(Boolean);

  // Initialize cart from profile data IDs 
  const initialCart = profile.cart.map(id => {
    const product = products.find(p => p.id === id);
    if (!product) return null;
    return {
      ...product,
      quantity: 1,
      selectedSize: product.sizes && product.sizes.length > 0 ? (product.sizes.includes("ALL") ? "36" : product.sizes[0]) : "M",
      selectedColor: product.colors && product.colors.length > 0 ? product.colors[0].hex : "#000000"
    }
  }).filter(Boolean);

  const [cartItems, setCartItems] = useState(initialCart);
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial load or hydration
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // Wishlist Logic
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Enhanced Add to Cart (Checks for duplicates with same ID + Size + Color)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id, size, color) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const updateQuantity = (id, size, color, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
        ) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black font-sans text-white">
        <Navbar
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
        />

        <main className="grow pt-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  addToCart={addToCart}
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  wishlistItems={wishlistItems}
                  toggleWishlist={toggleWishlist}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={toggleWishlist} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/track-order" element={<TrackOrder />} />


          </Routes>
        </main>

        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
