import { stat } from "fs";

const defaultRoutes = [
  { label: "Men", href: "/products/men" },
  { label: "Women", href: "/products/women" },
  { label: "Kids", href: "/products/kids" },
  { label: "Accessories", href: "/products/accessories" },
];

const categories = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Accessories", href: "/accessories" },
];

const filterData = [
  { label: "Price"},
  { label: "Popular"},
  { label: "Newest"},
  { label: "Offers"},

];

const filterOrderData = [
  { label: "All"},
  { label: "Recent"},
  { label: "Last 6 Month"},
  { label: "Last Year"},
];

const recentOrders = [
  {
    id: 1,
    name: "Nike Air Max 270",
    status: {
      trackingStatus: "Shipping",
      payment:{
        method: "Credit Card",
        status: "Paid",
        paymentId: "123456789",
        dateOfPayment: "10-12-2021, 12:00:00",
      },
      dateOfShipment: "Yet to be shipped",
    },
    quantity: 2,
    img: {
      src: "/products/accessories/nike-air-max-270.png",
      alt: "Nike Air Max 270",
    },
  },
  {
    id: 2,
    name: "Adidas Classic Shirt",
    status: {
      trackingStatus: "Delivered",
      payment:{
        method: "Debit Card",
        status: "Paid",
        paymentId: "123456789",
        dateOfPayment: "10-12-2021, 12:00:00",
      },
      dateOfShipment: "10-12-2021",
    },
    quantity: 1,
    img: {
      src: "/products/men/adidas-classic-shirt.png",
      alt: "Adidas Classic Shirt",
    },
  },
  {
    id: 3,
    name: "Yellow Sleevless Dress",
    status: {
      trackingStatus: "Cancelled",
      payment:{
        method: "Credit Card",
        status: "Paid",
        paymentId: "123456789",
        dateOfPayment: "10-12-2021, 12:00:00",
      },
      dateOfShipment: "10-12-2021",
    },
    quantity: 1,
    img: {
      src: "/products/women/yellow-sleevless-dress.png",
      alt: "Yellow Sleevless Dress",
    },
  },
]

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    img: "/nike-air-max-270.png",
    category: "Accessories",
    description:
      "The Nike Air Max 270 delivers visible air under every step. Updated for modern comfort, it pays homage to the original 1991 Air Max 180 with an exaggerated tongue top and heritage logo.",
    color: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    imgSet: [
      {
        src: "/nike-air-max-270-1.png",
        alt: "Nike Air Max 270",
      },
      {
        src: "/nike-air-max-270-2.png",
        alt: "Nike Air Max 270",
      },
    ],
    isTrending: true,
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    price: 120,
    img: "/nike-air-max-90.png",
    category: "Accessories",
    description:
      "The Nike Air Max 90 stays true to its OG roots with its iconic Waffle outsole, stitched overlays and classic, color-accented TPU plates. Retro colors celebrate the first generation while Max Air cushioning adds comfort to your journey.",
    color: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    imgSet: [
      {
        src: "/nike-air-max-90-1.png",
        alt: "Nike Air Max 90",
      },
      {
        src: "/nike-air-max-90-2.png",
        alt: "Nike Air Max 90",
      },
    ],
    isTrending: true,
  },
  {
    id: 3,
    name: "Adidas Classic Shirt",
    price: 80,
    img: "/adidas-classic-shirt.png",
    category: "Men",
    description:
      "The Adidas Superstar is a classic sneaker that's perfect for normal wear. With its leather upper and rubber sole, it offers both style and comfort.",
    color: ["cream", "gray"],
    size: ["M", "L", "XL", "XXL"],
    imgSet: [
      {
        src: "/adidas-superstar-1.png",
        alt: "Adidas Superstar",
      },
      {
        src: "/adidas-superstar-2.png",
        alt: "Adidas Superstar",
      },
    ],
    isTrending: true,
  },
  {
    id: 4,
    name: "Yellow Sleevless Dress",
    price: 60,
    img: "/yellow-sleevless-dress.png",
    category: "Women",
    description:
      "This dress is perfect for any occasion. Whether you're heading to a party or just want to look stylish, this dress is sure to turn heads.",
    color: ["Yellow", "Gray"],
    size: ["6", "7", "8", "9"],
    imgSet: [
      {
        src: "/converse-chuck-taylor-1.png",
        alt: "Converse Chuck Taylor",
      },
      {
        src: "/converse-chuck-taylor-2.png",
        alt: "Converse Chuck Taylor",
      },
    ],
    isTrending: true,
  },
  {
    id: 5,
    name: "Vans Old Skool",
    price: 70,
    img: "/vans-old-skool.png",
    category: "Kids",
    description:
      "The Vans Old Skool is a classic skate shoe that's perfect for kids. With its durable canvas upper and signature waffle outsole, it's built to withstand the demands of skateboarding.",
    color: ["black", "white"],
    size: ["3", "4", "5", "6"],
    imgSet: [
      {
        src: "/vans-old-skool-1.png",
        alt: "Vans Old Skool",
      },
      {
        src: "/vans-old-skool-2.png",
        alt: "Vans Old Skool",
      },
    ],
    isTrending: true,
  },
  {
    id: 6,
    name: "Ray-Ban Aviator",
    price: 200,
    img: "/ray-ban-aviator.png",
    category: "Accessories",
    description:
      "The Ray-Ban Aviator is a timeless classic that never goes out of style. With its iconic teardrop shape and metal frame, it's a must-have for any fashion enthusiast.",
    color: ["gold", "silver"],
    size: ["One Size"],
    imgSet: [
      {
        src: "/ray-ban-aviator-1.png",
        alt: "Ray-Ban Aviator",
      },
      {
        src: "/ray-ban-aviator-2.png",
        alt: "Ray-Ban Aviator",
      },
    ],
  },
  {
    id: 7,
    name: "Puma Suede Classic",
    price: 90,
    img: "/puma-suede-classic.png",
    category: "Men",
    description:
      "The Puma Suede Classic is a stylish and versatile sneaker. With its suede upper and rubber sole, it offers both comfort and durability.",
    color: ["black", "white"],
    size: ["7", "8", "9", "10"],
    imgSet: [
      {
        src: "/puma-suede-classic-1.png",
        alt: "Puma Suede Classic",
      },
      {
        src: "/puma-suede-classic-2.png",
        alt: "Puma Suede Classic",
      },
    ],
  },
  {
    id: 8,
    name: "Salwar Kameez",
    price: 150,
    img: "/salwar-kameez.png",
    category: "Women",
    description:
      "The Salwar Kameez is a traditional Indian outfit that consists of a tunic top (kameez), loose-fitting pants (salwar), and a scarf (dupatta). It is a versatile and comfortable attire suitable for various occasions.",
    color: ["red", "green", "blue"],
    size: ["S", "M", "L", "XL"],
    imgSet: [
      {
        src: "/salwar-kameez-1.png",
        alt: "Salwar Kameez",
      },
      {
        src: "/salwar-kameez-2.png",
        alt: "Salwar Kameez",
      },
    ],
    isTrending: true,
  },
  {
    id: 9,
    name: "Adidas Stan Smith",
    price: 75,
    img: "/adidas-stan-smith.png",
    category: "Kids",
    description:
      "The Adidas Stan Smith is a classic tennis shoe that's perfect for kids. With its leather upper and rubber outsole, it provides both style and traction.",
    color: ["black", "white"],
    size: ["3", "4", "5", "6"],
    imgSet: [
      {
        src: "/adidas-stan-smith-1.png",
        alt: "Adidas Stan Smith",
      },
      {
        src: "/adidas-stan-smith-2.png",
        alt: "Adidas Stan Smith",
      },
    ],
    isTrending: true,
  },
  {
    id: 10,
    name: "Gucci Belt",
    price: 350,
    img: "/gucci-belt.png",
    category: "Accessories",
    description:
      "The Gucci Belt is a luxury accessory that adds a touch of elegance to any outfit. With its iconic GG logo and leather construction, it's a statement piece.",
    color: ["black", "brown"],
    size: ["S", "M", "L", "XL"],
    imgSet: [
      {
        src: "/gucci-belt-1.png",
        alt: "Gucci Belt",
      },
      {
        src: "/gucci-belt-2.png",
        alt: "Gucci Belt",
      },
    ],
    isTrending: true,
  },
];

export { defaultRoutes, categories, products, filterData, filterOrderData, recentOrders };
