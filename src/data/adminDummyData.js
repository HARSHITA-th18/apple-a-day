// Temporary dummy data for Admin UI development.
// Later, this data will come from Firebase / Firestore.

// ============================================================
// ORDERS
// ============================================================

export const dummyOrders = [
  {
    id: "ORD-1001",

    customer: {
      id: "USER-001",
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
    },

    items: [
      {
        name: "Veg Burger",
        quantity: 1,
        price: 150,
      },
      {
        name: "Cold Coffee",
        quantity: 1,
        price: 120,
      },
    ],

    subtotal: 270,
    deliveryFee: 0,
    total: 270,

    fulfilment: "PICKUP",

    deliveryLocation: null,

    paymentMethod: "COD",

    status: "PLACED",

    token: "A101",

    time: "10:25 AM",

    createdAt: "2026-08-16T10:25:00",
  },

  {
    id: "ORD-1002",

    customer: {
      id: "USER-002",
      name: "Ishita Verma",
      email: "ishita.verma@example.com",
      phone: "+91 98765 43211",
    },

    items: [
      {
        name: "Masala Maggi",
        quantity: 1,
        price: 100,
      },
      {
        name: "Lemon Soda",
        quantity: 1,
        price: 90,
      },
    ],

    subtotal: 190,
    deliveryFee: 30,
    total: 220,

    fulfilment: "DELIVERY",

    deliveryLocation: "Hostel Block A, Room 204",

    paymentMethod: "COD",

    status: "ACCEPTED",

    token: "A102",

    time: "10:20 AM",

    createdAt: "2026-08-16T10:20:00",
  },

  {
    id: "ORD-1003",

    customer: {
      id: "USER-003",
      name: "Rohan Mehta",
      email: "rohan.mehta@example.com",
      phone: "+91 98765 43212",
    },

    items: [
      {
        name: "Margherita Pizza",
        quantity: 1,
        price: 320,
      },
    ],

    subtotal: 320,
    deliveryFee: 0,
    total: 320,

    fulfilment: "WAIT_AT_CAFE",

    deliveryLocation: null,

    paymentMethod: "COD",

    status: "PREPARING",

    token: "A103",

    time: "10:15 AM",

    createdAt: "2026-08-16T10:15:00",
  },

  {
    id: "ORD-1004",

    customer: {
      id: "USER-004",
      name: "Neha Kapoor",
      email: "neha.kapoor@example.com",
      phone: "+91 98765 43213",
    },

    items: [
      {
        name: "Paneer Wrap",
        quantity: 1,
        price: 160,
      },
      {
        name: "Fries",
        quantity: 1,
        price: 80,
      },
    ],

    subtotal: 240,
    deliveryFee: 30,
    total: 270,

    fulfilment: "DELIVERY",

    deliveryLocation: "Hostel Block C, Room 112",

    paymentMethod: "COD",

    status: "READY",

    token: "A104",

    time: "10:05 AM",

    createdAt: "2026-08-16T10:05:00",
  },

  {
    id: "ORD-1005",

    customer: {
      id: "USER-005",
      name: "Arjun Nair",
      email: "arjun.nair@example.com",
      phone: "+91 98765 43214",
    },

    items: [
      {
        name: "Cold Coffee",
        quantity: 1,
        price: 120,
      },
    ],

    subtotal: 120,
    deliveryFee: 0,
    total: 120,

    fulfilment: "PICKUP",

    deliveryLocation: null,

    paymentMethod: "COD",

    status: "COMPLETED",

    token: "A105",

    time: "09:50 AM",

    createdAt: "2026-08-16T09:50:00",
  },
]


// ============================================================
// SMART QUEUE
// ============================================================

export const dummyQueue = [
  {
    token: "A101",
    orderId: "ORD-1001",

    customer: {
      id: "USER-001",
      name: "Aarav Sharma",
      phone: "+91 98765 43210",
    },

    preparationTime: 12,

    orderAge: 8,

    priorityScore: 92,

    fulfilment: "PICKUP",

    status: "WAITING",
  },

  {
    token: "A102",
    orderId: "ORD-1002",

    customer: {
      id: "USER-002",
      name: "Ishita Verma",
      phone: "+91 98765 43211",
    },

    preparationTime: 8,

    orderAge: 13,

    priorityScore: 84,

    fulfilment: "DELIVERY",

    status: "PREPARING",
  },

  {
    token: "A103",
    orderId: "ORD-1003",

    customer: {
      id: "USER-003",
      name: "Rohan Mehta",
      phone: "+91 98765 43212",
    },

    preparationTime: 15,

    orderAge: 18,

    priorityScore: 76,

    fulfilment: "WAIT_AT_CAFE",

    status: "WAITING",
  },

  {
    token: "A104",
    orderId: "ORD-1004",

    customer: {
      id: "USER-004",
      name: "Neha Kapoor",
      phone: "+91 98765 43213",
    },

    preparationTime: 10,

    orderAge: 22,

    priorityScore: 68,

    fulfilment: "DELIVERY",

    status: "READY",
  },
]


// ============================================================
// MENU ITEMS
// ============================================================

export const dummyMenuItems = [
  {
    id: "MENU001",

    name: "Veg Burger",

    description: "Fresh vegetable patty with lettuce and sauce.",

    category: "Fast Food",

    price: 150,

    stock: 25,

    available: true,

    image: "/images/veg-burger.jpg",
  },

  {
    id: "MENU002",

    name: "Margherita Pizza",

    description: "Classic pizza with tomato, mozzarella and herbs.",

    category: "Pizza",

    price: 320,

    stock: 12,

    available: true,

    image: "/images/margherita-pizza.jpg",
  },

  {
    id: "MENU003",

    name: "Masala Maggi",

    description: "Hot and spicy masala noodles.",

    category: "Quick Bites",

    price: 100,

    stock: 30,

    available: true,

    image: "/images/masala-maggi.jpg",
  },

  {
    id: "MENU004",

    name: "Cold Coffee",

    description: "Chilled creamy coffee.",

    category: "Beverages",

    price: 120,

    stock: 0,

    available: false,

    image: "/images/cold-coffee.jpg",
  },

  {
    id: "MENU005",

    name: "Paneer Wrap",

    description: "Spiced paneer wrapped with fresh vegetables.",

    category: "Wraps",

    price: 160,

    stock: 18,

    available: true,

    image: "/images/paneer-wrap.jpg",
  },

  {
    id: "MENU006",

    name: "French Fries",

    description: "Crispy golden fries.",

    category: "Sides",

    price: 80,

    stock: 40,

    available: true,

    image: "/images/fries.jpg",
  },

  {
    id: "MENU007",

    name: "Lemon Soda",

    description: "Refreshing lemon soda.",

    category: "Beverages",

    price: 90,

    stock: 20,

    available: true,

    image: "/images/lemon-soda.jpg",
  },
]


// ============================================================
// DELIVERY ORDERS
// ============================================================

export const dummyDeliveries = [
  {
    orderId: "ORD-1002",

    customer: {
      id: "USER-002",
      name: "Ishita Verma",
      email: "ishita.verma@example.com",
      phone: "+91 98765 43211",
    },

    location: "Hostel Block A, Room 204",

    status: "OUT_FOR_DELIVERY",

    estimatedTime: "12 min",

    assignedPartnerId: null,
  },

  {
    orderId: "ORD-1004",

    customer: {
      id: "USER-004",
      name: "Neha Kapoor",
      email: "neha.kapoor@example.com",
      phone: "+91 98765 43213",
    },

    location: "Hostel Block C, Room 112",

    status: "READY_FOR_DELIVERY",

    estimatedTime: "-",

    assignedPartnerId: null,
  },
]


// ============================================================
// CAFÉ ROOM BOOKINGS
// ============================================================

export const dummyRoomBookings = [
  {
    id: "ROOM001",

    customer: {
      id: "USER-006",
      name: "Karan Malhotra",
      email: "karan.malhotra@example.com",
      phone: "+91 98765 43215",
    },

    purpose: "Birthday Party",

    date: "2026-08-20",

    startTime: "17:00",

    endTime: "20:00",

    guests: 25,

    status: "CONFIRMED",

    notes: "Birthday decoration required.",

    createdAt: "2026-08-10T11:30:00",
  },

  {
    id: "ROOM002",

    customer: {
      id: "USER-007",
      name: "Priya Singh",
      email: "priya.singh@example.com",
      phone: "+91 98765 43216",
    },

    purpose: "Farewell Party",

    date: "2026-08-22",

    startTime: "14:00",

    endTime: "17:00",

    guests: 18,

    status: "PENDING",

    notes: "Need projector and extra chairs.",

    createdAt: "2026-08-12T14:20:00",
  },

  {
    id: "ROOM003",

    customer: {
      id: "USER-008",
      name: "Vivek Joshi",
      email: "vivek.joshi@example.com",
      phone: "+91 98765 43217",
    },

    purpose: "Club Meeting",

    date: "2026-08-24",

    startTime: "11:00",

    endTime: "13:00",

    guests: 12,

    status: "CONFIRMED",

    notes: "Regular club meeting.",

    createdAt: "2026-08-13T09:15:00",
  },
]


// ============================================================
// ANNOUNCEMENTS
// ============================================================

export const dummyAnnouncements = [
  {
    id: "ANN001",

    title: "Weekend Special",

    message: "Get 20% off on selected pizzas this weekend.",

    status: "ACTIVE",

    date: "2026-08-15",

    createdBy: "Café Admin",

    createdAt: "2026-08-15T09:00:00",
  },

  {
    id: "ANN002",

    title: "Café Room Available",

    message:
      "Book our café room for birthdays, meetings and private events.",

    status: "ACTIVE",

    date: "2026-08-14",

    createdBy: "Café Admin",

    createdAt: "2026-08-14T10:30:00",
  },

  {
    id: "ANN003",

    title: "New Beverage Added",

    message:
      "Try our new seasonal cold coffee and refreshing beverages.",

    status: "SCHEDULED",

    date: "2026-08-25",

    createdBy: "Café Admin",

    createdAt: "2026-08-16T08:00:00",
  },
]


// ============================================================
// REVIEWS
// ============================================================

export const dummyReviews = [
  {
    id: "REV001",

    customer: {
      id: "USER-009",
      name: "Rahul",
      email: "rahul@example.com",
      phone: "+91 98765 43218",
    },

    orderId: "ORD-0980",

    rating: 5,

    comment:
      "The food was great and the service was very quick.",

    date: "2026-08-15",

    replied: false,
  },

  {
    id: "REV002",

    customer: {
      id: "USER-010",
      name: "Sneha",
      email: "sneha@example.com",
      phone: "+91 98765 43219",
    },

    orderId: "ORD-0975",

    rating: 4,

    comment:
      "Good food. Waiting time was slightly high.",

    date: "2026-08-14",

    replied: false,
  },

  {
    id: "REV003",

    customer: {
      id: "USER-011",
      name: "Vikram",
      email: "vikram@example.com",
      phone: "+91 98765 43220",
    },

    orderId: "ORD-0968",

    rating: 3,

    comment:
      "Pizza was good but coffee was unavailable.",

    date: "2026-08-13",

    replied: true,
  },

  {
    id: "REV004",

    customer: {
      id: "USER-012",
      name: "Meera",
      email: "meera@example.com",
      phone: "+91 98765 43221",
    },

    orderId: "ORD-0960",

    rating: 5,

    comment:
      "Loved the food and the café atmosphere.",

    date: "2026-08-12",

    replied: false,
  },
]


// ============================================================
// ADMIN DASHBOARD SUMMARY
// ============================================================

export const dummyDashboardStats = {
  totalOrders: 128,

  todaysRevenue: 18540,

  pendingOrders: 14,

  preparingOrders: 14,

  readyOrders: 38,

  completedOrders: 52,

  cancelledOrders: 3,

  outForDelivery: 7,

  totalMenuItems: 24,

  availableMenuItems: 21,

  cafeRoomBookings: 3,
}