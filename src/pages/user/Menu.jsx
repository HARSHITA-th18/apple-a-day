import { useState } from "react";
import MenuCard from "../../components/user/MenuCard";

const menuItems = [
  // ================= BREAKFAST =================

  {
    id: 1,
    name: "Aloo Paratha",
    description: "Fresh aloo paratha",
    price: 50,
    category: "Breakfast",
    available: true,
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/11/aloo-paratha-1.jpg",
  },

  {
    id: 2,
    name: "Veg Sandwich",
    description: "Fresh vegetable sandwich",
    price: 60,
    category: "Breakfast",
    available: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
  },

  // ================= LUNCH / DINNER =================

  {
    id: 3,
    name: "Shahi Paneer",
    description: "Rich creamy paneer curry",
    price: 200,
    category: "Lunch & Dinner",
    available: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
  },

  {
    id: 4,
    name: "Kadhai Paneer",
    description: "Spicy paneer cooked with vegetables",
    price: 170,
    category: "Lunch & Dinner",
    available: true,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
  },

  {
    id: 5,
    name: "Mix Veg",
    description: "Mixed seasonal vegetables",
    price: 100,
    category: "Lunch & Dinner",
    available: true,
    image: "https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg",
  },

  {
    id: 6,
    name: "Dal Makhni",
    description: "Creamy black lentils",
    price: 130,
    category: "Lunch & Dinner",
    available: true,
    image: "https://www.sharmispassions.com/wp-content/uploads/2012/05/dal-makhani7.jpg",
  },

  {
    id: 7,
    name: "Channa Sabzi",
    description: "Spiced chickpea curry",
    price: 40,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvMe05geJykaRFcj689XBKm5DZdTzcUYJ_djJhqV4SB6-DecCoAGfvU8s&s=10",
  },

  {
    id: 8,
    name: "Jeera Rice",
    description: "Fragrant cumin rice",
    price: 80,
    category: "Lunch & Dinner",
    available: true,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg",
  },

  {
    id: 9,
    name: "Veg Pulao",
    description: "Vegetable rice pulao",
    price: 100,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5ZYo_4_tD8Pt6TmayvVoK55FMGmlQX-svIqVqnPI7ng2VL1IMp0xmvyP&s=10",
  },

  {
    id: 10,
    name: "Mix Raita",
    description: "Refreshing mixed raita",
    price: 40,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJW8P1SJTLrHBmJlj0j86B_CK7nrHGcztQM6BybA5hknR40oghdDIO6c&s=10",
  },

  {
    id: 11,
    name: "Butter Roti",
    description: "Soft roti with butter",
    price: 15,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2Lnh2ErK2hW2VO6nDMoDILvIaKaHS7Sd4VNispQnhLDWW1e3g-I66Syl&s=10",
  },

  {
    id: 12,
    name: "Butter Naan",
    description: "Soft naan with butter",
    price: 30,
    category: "Lunch & Dinner",
    available: true,
    image: "https://www.pachakam.com/wp-content/uploads/2009/05/new-butter-naan.jpg",
  },

  {
    id: 13,
    name: "Tandoori Roti",
    description: "Traditional tandoori roti",
    price: 12,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKj_Q5scadtWzixTb7mCcs1VSC-QIOmV6T86CsPZNiWI4Xo7cB0d8TwZi&s=10",
  },

  {
    id: 14,
    name: "Vegetable Salad",
    description: "Fresh vegetable salad",
    price: 40,
    category: "Lunch & Dinner",
    available: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },

  {
    id: 15,
    name: "Amritsari Naan with Channa",
    description: "Amritsari naan served with channa",
    price: 80,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemGRDrj7dxZ26Icng43MTN46_cBqJMfd4Qvv2GbwmnT-TbgPDcGcR2J7r&s=10",
  },

  {
    id: 16,
    name: "Simple Thali",
    description: "Complete vegetarian meal",
    price: 130,
    category: "Lunch & Dinner",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yfffvvZu8A1pmcvMY7wvgK4X-2xvt-ZZGqesXsSEzm5eB1t1ut7Q7oyT&s=10",
  },

  {
    id: 17,
    name: "Special Thali",
    description: "Special complete vegetarian meal",
    price: 160,
    category: "Lunch & Dinner",
    available: true,
    image: "https://skydecklounge.in/wp-content/uploads/2022/01/Sky-Deck-Special-Thali.jpg",
  },

  {
    id: 18,
    name: "Butter",
    description: "Fresh butter",
    price: 10,
    category: "Lunch & Dinner",
    available: true,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
  },

  {
    id: 19,
    name: "Stuffed Naan",
    description: "Stuffed naan",
    price: 60,
    category: "Lunch & Dinner",
    available: true,
    image: "https://fullofplants.com/wp-content/uploads/2024/11/Potato-Green-Bean-Stuffed-Naan-Pinterest.jpg",
  },

  // ================= DESSERT =================

  {
    id: 20,
    name: "Strawberry Ice Cream",
    description: "Creamy strawberry ice cream",
    price: 20,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRVTObL3LDDIrGFZyokZdRlBcM5X4JkkBrKevsZ1UX9iOk1R9T85yc6E&s=10",
  },

  {
    id: 21,
    name: "Vanilla Ice Cream",
    description: "Classic vanilla ice cream",
    price: 20,
    category: "Desserts",
    available: true,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371",
  },

  {
    id: 22,
    name: "Vanilla Pastry",
    description: "Soft vanilla pastry",
    price: 35,
    category: "Desserts",
    available: true,
    image: "https://jambubakers.com/wp-content/uploads/2024/01/VANILLA-PASTRY-1.jpg",
  },

  {
    id: 23,
    name: "Strawberry Pastry",
    description: "Fresh strawberry pastry",
    price: 35,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-Gk7zGRv3z4YURH8NyRw917ovsRf3xzWmhezdkIPcKaY_CLocwOSs2xT&s=10",
  },

  {
    id: 24,
    name: "Chocolate Pastry",
    description: "Rich chocolate pastry",
    price: 35,
    category: "Desserts",
    available: true,
    image: "https://cdn.uengage.io/uploads/64261/image-616253-1778654171.jpeg",
  },

  {
    id: 25,
    name: "Chocolate Ice Cream",
    description: "Chocolate flavoured ice cream",
    price: 30,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdxyexfXoFs_e9kZ-3RFzq9V68FVoRotpJlQwAIgFxFBM_P0ZNE_ghx4&s=10",
  },

  {
    id: 26,
    name: "Butterscotch Tub",
    description: "Butterscotch ice cream tub",
    price: 99,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEKaanJ15E4z5KuJVmqOHbZFjIH2AdIb9dp24C_dRgRto47V9pgmHhvk&s=10",
  },

  {
    id: 27,
    name: "Choco Bar",
    description: "Chocolate ice cream bar",
    price: 20,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAqXYDL5XEFMRaCdjF-l7ruxVHiQ8iHfoyapC9_GaKEL0RkxLgBDnVVcV&s=10",
  },

  {
    id: 28,
    name: "Sach Much Aam",
    description: "Mango frozen dessert",
    price: 30,
    category: "Desserts",
    available: true,
    image: "https://cpimg.tistatic.com/05822322/b/4/Sachmuch-Aam-Ice-Cream-Bar.jpg",
  },

  {
    id: 29,
    name: "Shahi Kulfi",
    description: "Traditional creamy kulfi",
    price: 40,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44EDFYxxulvXk4D1kh85dVmIRCaAw4VgXi1M6hAJWvA&s=10",
  },

  {
    id: 30,
    name: "Kesar Mawa Bar",
    description: "Kesar flavoured frozen bar",
    price: 30,
    category: "Desserts",
    available: true,
    image: "https://5.imimg.com/data5/OM/HX/GE/SELLER-4199470/kesar-pista-kulfi-ice-cream-500x500.jpg",
  },

  {
    id: 31,
    name: "Treat Bar",
    description: "Chocolate treat bar",
    price: 40,
    category: "Desserts",
    available: true,
    image: "https://5.imimg.com/data5/ET/FO/YZ/SELLER-3071007/choco-treat-bar-ice-cream-500x500.jpg",
  },

  {
    id: 32,
    name: "Maxxum Caramel",
    description: "Caramel ice cream bar",
    price: 50,
    category: "Desserts",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsAVe_INPZwH6ZNqAO6jK49rmY9rpoxC9ElXnmRkwaA&s=10",
  },

  {
    id: 33,
    name: "Maxxum Silky",
    description: "Silky chocolate ice cream bar",
    price: 50,
    category: "Desserts",
    available: true,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/6/7/efe7c7b0-afed-4a35-a167-c11f8e0a4544_206693_1.png",
  },

  {
    id: 34,
    name: "Pista Ice Cream",
    description: "Pistachio ice cream",
    price: 50,
    category: "Desserts",
    available: true,
    image: "https://www.sharmispassions.com/wp-content/uploads/2017/04/PistaIcecream2-475x500.jpg",
  },

  // ================= BEVERAGES =================

  {
    id: 35,
    name: "Tea",
    description: "Hot refreshing tea",
    price: 15,
    category: "Beverages",
    available: true,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
  },

  {
    id: 36,
    name: "Hot Coffee",
    description: "Fresh hot coffee",
    price: 25,
    category: "Beverages",
    available: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },

  {
    id: 37,
    name: "Plain Hot Milk",
    description: "Hot fresh milk",
    price: 25,
    category: "Beverages",
    available: true,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
  },

  {
    id: 38,
    name: "Hot Chocolate Milk",
    description: "Hot chocolate milk",
    price: 40,
    category: "Beverages",
    available: true,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed",
  },

  {
    id: 39,
    name: "Cold Coffee",
    description: "Chilled creamy coffee",
    price: 60,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg24FI6YZL7vhL0TXP78vWpSe-vlO7XTjUq_qHfhJV4w&s=10",
  },

  {
    id: 40,
    name: "Namkeen Lassi",
    description: "Refreshing salted lassi",
    price: 40,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhg1LU-zisL9Xat5Uey2IVgbe5Mv_tRMe73ufype3j4A&s=10",
  },

  {
    id: 41,
    name: "Mithi Lassi",
    description: "Sweet refreshing lassi",
    price: 40,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EEAEMHr5XJSeJpqWoBFcm6jqWHds0p_PB0G_Z4SqL_8WMCujqFYR-ifV&s=10",
  },

  {
    id: 42,
    name: "Oreo Shake",
    description: "Creamy Oreo shake",
    price: 80,
    category: "Beverages",
    available: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
  },

  {
    id: 43,
    name: "Black Coffee",
    description: "Strong black coffee",
    price: 20,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9S7GJjlWzxvxQZZS4qAEr3XWbns1Bwi0zyaACmUYnqg&s=10",
  },

  {
    id: 44,
    name: "Strawberry Shake",
    description: "Fresh strawberry shake",
    price: 60,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrvNTa3-EfbkK2gG-HGsIOXfX__SHMsLsyarC-altiQ&s=10",
  },

  {
    id: 45,
    name: "Vanilla Shake",
    description: "Creamy vanilla shake",
    price: 60,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWvQuS_U3z2H9T4n7LzJfkD5fe77P82JjPUW9RLonAg&s=10",
  },

  {
    id: 46,
    name: "Chocolate Shake",
    description: "Rich chocolate shake",
    price: 80,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuhnwjdyvmCEwkst-8RphDiIirBAM2xh9aQcyj5u-uQ&s=10",
  },

  {
    id: 47,
    name: "Mango Shake",
    description: "Fresh mango shake",
    price: 70,
    category: "Beverages",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAXYhq9FZXNOf32zNFK07DyP_4g9-6VNT1yHSGkAzWg&s=10",
  },

  {
    id: 48,
    name: "Mosambi Juice",
    description: "Fresh sweet lime juice",
    price: 80,
    category: "Juices",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFnDokSrO-je0k45qFRmN3y_mDzBWc-MuHm5eKZogTw&s=10",
  },

  {
    id: 49,
    name: "Lemonade",
    description: "Fresh lemon drink",
    price: 20,
    category: "Juices",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMHE6qXMwZkdrQwrOtd-71xcMvbBq7C4lDu_3yfcEJA&s=10",
  },

  // ================= PIZZA =================

  {
    id: 50,
    name: "Bread Pizza",
    description: "Cheesy bread pizza",
    price: 60,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zwYVFEmDtx19Hy6lAJWxepfUyrHplsrkU5dfTFfiGg&s=10",
  },

  {
    id: 51,
    name: "Capsicum Onion Pizza - Large",
    description: "Capsicum and onion pizza",
    price: 160,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuvpdczSxoVxgG5NnjxkIyPgKW6O15MqY5NRr8799xw&s=10",
  },

  {
    id: 52,
    name: "Margherita Pizza - Small",
    description: "Classic margherita pizza",
    price: 90,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-AAcpRyLJD6y-kxSmyd3-d98kKOnwb4CKYZwgUu39w&s=10",
  },

  {
    id: 53,
    name: "Margherita Pizza - Large",
    description: "Classic margherita pizza",
    price: 180,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbzMZ1vzqYyWLzYiGVyboDZfdVGf3CPOrdQjz-_DIxw&s=10",
  },

  {
    id: 54,
    name: "Cheese Corn Pizza - Small",
    description: "Cheesy corn pizza",
    price: 90,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDrxQQA2t8ttDKMtzvKMLyMlgcoZG70TZA_yEPgZYQ-EPtEuRemRPI1iy&s=10",
  },

  {
    id: 55,
    name: "Cheese Corn Pizza - Large",
    description: "Cheesy corn pizza",
    price: 180,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspHJOy5FuoNn_G731V2lwPFXHoz5Ik15UQBqzc4Z3Xg&s",
  },

  {
    id: 56,
    name: "Veg Pizza - Small",
    description: "Loaded vegetable pizza",
    price: 90,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYTdXTdXHjHAvtL_Cai3gPdVbeR5CmrHDTD-iEfncuQ&s=10",
  },

  {
    id: 57,
    name: "Veg Pizza - Large",
    description: "Loaded vegetable pizza",
    price: 180,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR742XDAjxMMDj9WA8y_BLtOLRHoO5UjFP91v7dBI_Clg&s=10",
  },

  {
    id: 58,
    name: "Paneer Corn Pizza - Large",
    description: "Paneer and corn pizza",
    price: 200,
    category: "Pizza",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKzGibkw80bKDExC_d7EZQXvspRAYbKWsOmZRYgX51A&s=10",
  },

  // ================= SANDWICH =================

  {
    id: 59,
    name: "Butter Toast",
    description: "Crispy butter toast",
    price: 40,
    category: "Sandwich",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCc9qVth_posWjH3WJBK1c-VJVD8JOvH1CaxOKKTAJQ&s=10",
  },

  {
    id: 60,
    name: "Grilled Sandwich",
    description: "Grilled vegetable sandwich",
    price: 80,
    category: "Sandwich",
    available: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
  },

  {
    id: 61,
    name: "Grilled Cheese Sandwich",
    description: "Grilled sandwich with cheese",
    price: 90,
    category: "Sandwich",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6EZJs3uyTY5qHxbNZWSbgMEZUcihUJbq_l8dvvgW5g&s=10",
  },

  // ================= BURGER / FRIES =================

  {
    id: 62,
    name: "Aloo Tikki Burger",
    description: "Crispy aloo tikki burger",
    price: 45,
    category: "Burgers & Fries",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU172PnubFYDoUdxMZZ5cDFITSxjuOxBdbna4yKzUsg&s=10",
  },

  {
    id: 63,
    name: "French Fries",
    description: "Crispy golden fries",
    price: 50,
    category: "Burgers & Fries",
    available: true,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },

  {
    id: 64,
    name: "Smiley Tikki",
    description: "Crispy smiley snacks",
    price: 50,
    category: "Burgers & Fries",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mJKK4KZCMKcItuGtH4YP9o5BcWX3OVuv9WJqXWKq6Q&s=10",
  },

  {
    id: 65,
    name: "Cheese Loaded Fries",
    description: "Fries loaded with cheese",
    price: 90,
    category: "Burgers & Fries",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxEvvKOuH7cxjXQcfcr440R0xmjCare_yN5g4vdWJfw&s=10",
  },

  {
    id: 66,
    name: "Peri Peri Fries",
    description: "Spicy peri peri fries",
    price: 60,
    category: "Burgers & Fries",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSmhISwI8oS65YDBNP21R0WEaZgv83xX9T9hTWRjGvg&s=10",
  },

  // ================= DOSA =================

  {
    id: 67,
    name: "Plain Dosa",
    description: "Crispy plain dosa",
    price: 70,
    category: "South Indian",
    available: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
  },

  // ================= CAKES =================

  {
    id: 68,
    name: "Chocolate Cake - Regular",
    description: "1 kg chocolate cake",
    price: 400,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw3qP_6wbjUo3ZSSw33KPocFtFk-YvQa1he1zSysvOA&s=10",
  },

  {
    id: 69,
    name: "Chocolate Cake - Small",
    description: "1/2 kg chocolate cake",
    price: 200,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7C-IcvxGl5YUzRdKH_giL9Ldk8cW2tXhOcqQTsFKtw&s=10",
  },

  {
    id: 70,
    name: "Strawberry Cake - Regular",
    description: "1 kg strawberry cake",
    price: 350,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHe_rYvCsYKBef-eeQr1QO9bu44QhVYCKy3Fpjus2Eg&s=10",
  },

  {
    id: 71,
    name: "Strawberry Cake - Small",
    description: "1/2 kg strawberry cake",
    price: 180,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjSOkr7SYWi13yw8pTl3EYwVI5eLFPacYw9YvT2Ajlw&s=10",
  },

  {
    id: 72,
    name: "Vanilla Cake - Regular",
    description: "1 kg vanilla cake",
    price: 350,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh1VwPweYzVTlVDL_0prEpt_IIMP8Zrp70yXgZxM4Jg&s=10",
  },

  {
    id: 73,
    name: "Vanilla Cake - Small",
    description: "1/2 kg vanilla cake",
    price: 180,
    category: "Cakes",
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCK01Op-EcXbeRNzlSt3n1ogE3ckEDC4P1FXeL33wdkA&s=10",
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Breakfast",
    "Lunch & Dinner",
    "Desserts",
    "Beverages",
    "Juices",
    "Pizza",
    "Sandwich",
    "Burgers & Fries",
    "South Indian",
    "Cakes",
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Campus Menu
          </h1>

          <p className="text-gray-500 mt-2">
            Delicious food, drinks and desserts at your campus café.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex gap-3 overflow-x-auto pb-5 mb-6">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-green-50"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ITEMS */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">
              😕
            </div>

            <h2 className="text-2xl font-bold">
              No items found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Menu;

















