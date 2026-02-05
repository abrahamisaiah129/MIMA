export const profile = {
    firstname: "Abraham",
    lastname: "Isaiah",
    email: "abrahamisaiah129@gmail.com",
    address: "123 Main St, Anytown, USA",
    phone: "09132260101",
    balance: 1000000,
    memberSince: "2025",
    orderHistory: [
        {
            id: 1,
            date: "2022-01-01",
            items: [1],
            total: 100,
            status: "Delivered",
        },
        {
            id: 2,
            date: "2022-01-02",
            total: 200,
            status: "Delivered",
        },
        {
            id: 3,
            date: "2022-01-03",
            total: 300,
            status: "Pending",
        },
        {
            id: 4,
            date: "2022-01-04",
            total: 400,
            status: "Delivered",
        }
    ],
    wishlist: [1, 2],
    cart: [1],
    transactions: [
        {
            id: 1,
            type: "DEPOSIT",
            amount: 50000,
            date: "Oct 24, 2025",
            status: "Success",
        },
        {
            id: 2,
            type: "PURCHASE",
            amount: 12500,
            date: "Oct 22, 2025",
            status: "Success",
        },
        {
            id: 3,
            type: "PURCHASE",
            amount: 8500,
            date: "Oct 20, 2025",
            status: "Success",
        },
        {
            id: 4,
            type: "DEPOSIT",
            amount: 20000,
            date: "Oct 15, 2025",
            status: "Success",
        },
    ],
    subscribed: true // Default to true or false based on mockup requirement
}