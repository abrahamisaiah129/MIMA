import { products } from "./products";

export const posts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=600&auto=format&fit=crop",
        user: "@sarah.style",
        date: "2h ago",
        link: "https://www.instagram.com/"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
        user: "@luxury.feet",
        date: "5h ago",
        link: "https://www.instagram.com/"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop",
        user: "@urban.minimalist",
        date: "1d ago",
        link: "https://www.instagram.com/"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        user: "@kicks.daily",
        date: "2d ago",
        link: "https://www.instagram.com/"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        user: "@ceo.looks",
        date: "3d ago",
        link: "https://www.instagram.com/"
    },
];

export const latestDrops = products.slice(0, 5);

// Trending: Top rated products (5 stars)
export const trendingProducts = products
    .filter(p => p.rating === 5)
    .slice(0, 8); // Limit to top 8

// Most Searched: Taking a diverse slice from the middle of the product array to ensure variety
// and automatically include mixed categories.
export const mostSearchedProducts = products.slice(4, 12);

export const heroSlides = [
    {
        id: 1,
        title: "MONOCHROME\nLUXURY",
        subtitle: "New Collection 2026",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
        align: "left",
    },
    {
        id: 2,
        title: "URBAN\nMINIMALISM",
        subtitle: "Streetwear Redefined",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2000&auto=format&fit=crop",
        align: "center",
    },
    {
        id: 3,
        title: "TIMELESS\nELEGANCE",
        subtitle: "Step Into the Future",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",
        align: "right",
    },
];

export const categories = [
    {
        id: "heels",
        title: "Luxury Heels",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
        count: "24 Items",
    },
    {
        id: "sneakers",
        title: "Street Sneakers",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
        count: "42 Items",
    },
    {
        id: "boots",
        title: "Premium Boots",
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
        count: "18 Items",
    },
    {
        id: "flats",
        title: "Comfort Flats",
        image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop",
        count: "12 Items",
    },
];

export const features = [
    {
        icon: "Truck",
        title: "Fast Delivery",
        text: "Nationwide shipping within 3-5 days.",
    },
    {
        icon: "ShieldCheck",
        title: "Secure Wallet",
        text: "Safe & seamless payments via your MIMA Wallet.",
    },
    {
        icon: "RefreshCw",
        title: "Easy Returns",
        text: "Hassle-free 7-day return policy.",
    },
    {
        icon: "CreditCard",
        title: "Budget Friendly",
        text: "Luxury looks at prices that make sense.",
    },
];