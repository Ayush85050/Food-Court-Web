const mongoose = require("mongoose");

const defaultCategory = [
    { CategoryName: "Biryani/Rice" },
    { CategoryName: "Starter" },
    { CategoryName: "Pizza" },
    { CategoryName: "Burgers & Wraps" },
    { CategoryName: "Chinese & Noodles" },
    { CategoryName: "Desserts & Beverages" }
];

const defaultItems = [
    // Biryani / Rice
    {
        _id: "1",
        CategoryName: "Biryani/Rice",
        name: "Hyderabadi Chicken Biryani",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
        options: [{ "half": "140", "full": "240" }],
        description: "Fragrant basmati rice cooked with succulent spiced chicken and authentic Hyderabadi spices served with raita."
    },
    {
        _id: "2",
        CategoryName: "Biryani/Rice",
        name: "Veg Dum Biryani",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop",
        options: [{ "half": "110", "full": "190" }],
        description: "Slow-cooked aromatic rice with fresh vegetables, mint, and fried onions."
    },
    {
        _id: "3",
        CategoryName: "Biryani/Rice",
        name: "Paneer Butter Masala Rice Bowl",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop",
        options: [{ "half": "120", "full": "210" }],
        description: "Rich and creamy paneer butter gravy served with fluffy jeera rice."
    },

    // Starter
    {
        _id: "4",
        CategoryName: "Starter",
        name: "Smoky Paneer Tikka",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop",
        options: [{ "half": "120", "full": "210" }],
        description: "Tandoori grilled cottage cheese cubes marinated in yogurt and spiced tikka masala."
    },
    {
        _id: "5",
        CategoryName: "Starter",
        name: "Crispy Peri Peri Chicken Wings",
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&auto=format&fit=crop",
        options: [{ "6 Pcs": "160", "12 Pcs": "290" }],
        description: "Golden fried crispy chicken wings tossed in fiery peri peri seasoning."
    },
    {
        _id: "6",
        CategoryName: "Starter",
        name: "Hara Bhara Kebab",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop",
        options: [{ "half": "90", "full": "160" }],
        description: "Nutritious kebabs prepared from spinach, green peas, and fresh herbs."
    },

    // Pizza
    {
        _id: "7",
        CategoryName: "Pizza",
        name: "Margherita Supreme Pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop",
        options: [{ "regular": "160", "medium": "290", "large": "440" }],
        description: "Fresh tomato sauce, melted mozzarella, extra virgin olive oil, and fresh basil leaves."
    },
    {
        _id: "8",
        CategoryName: "Pizza",
        name: "Farmhouse Veggie Delight",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
        options: [{ "regular": "180", "medium": "320", "large": "480" }],
        description: "Loaded with capsicum, onion, grilled corn, mushrooms, and black olives."
    },
    {
        _id: "9",
        CategoryName: "Pizza",
        name: "Pepperoni & Cheese Loaded",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop",
        options: [{ "regular": "210", "medium": "380", "large": "550" }],
        description: "Savory pepperoni slices over rich mozzarella cheese and zesty tomato sauce."
    },

    // Burgers & Wraps
    {
        _id: "10",
        CategoryName: "Burgers & Wraps",
        name: "Crispy Veg Loaded Burger",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
        options: [{ "single": "80", "double cheese": "120" }],
        description: "Crispy vegetable patty topped with melted cheese, lettuce, and tangy mayo."
    },
    {
        _id: "11",
        CategoryName: "Burgers & Wraps",
        name: "Grilled Chicken Cheese Burger",
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop",
        options: [{ "single": "110", "double cheese": "160" }],
        description: "Juicy grilled chicken patty with cheddar cheese, caramelized onions, and BBQ sauce."
    },

    // Chinese & Noodles
    {
        _id: "12",
        CategoryName: "Chinese & Noodles",
        name: "Schezwan Veg Hakka Noodles",
        img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop",
        options: [{ "half": "100", "full": "170" }],
        description: "Wok-tossed noodles with shredded vegetables and spicy Schezwan sauce."
    },
    {
        _id: "13",
        CategoryName: "Chinese & Noodles",
        name: "Chilli Paneer Dry",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop",
        options: [{ "half": "130", "full": "220" }],
        description: "Batter-fried cottage cheese cubes tossed with bell peppers, green chillies, and soy sauce."
    },

    // Desserts & Beverages
    {
        _id: "14",
        CategoryName: "Desserts & Beverages",
        name: "Hot Gulab Jamun with Ice Cream",
        img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop",
        options: [{ "2 Pcs": "70", "4 Pcs": "120" }],
        description: "Warm soft gulab jamuns served with a scoop of rich vanilla ice cream."
    },
    {
        _id: "15",
        CategoryName: "Desserts & Beverages",
        name: "Cold Coffee with Vanilla Scoop",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop",
        options: [{ "regular": "90", "large": "140" }],
        description: "Thick chilled espresso coffee blended with ice cream and topped with cocoa powder."
    }
];

const mongodb = async () => {
    try {
        await mongoose.connect("mongodb+srv://shivanshvasuofficial:Shiva1234@cluster0.oygyq78.mongodb.net/foodapp", {
            serverSelectionTimeoutMS: 5000
        });
        console.log("DB connected");
        const foodCollection = await mongoose.connection.db.collection("food");
        const data = await foodCollection.find({}).toArray();
        global.food_items = (data && data.length > 5) ? data : defaultItems;

        const categoryCollection = await mongoose.connection.db.collection("category");
        const catData = await categoryCollection.find({}).toArray();
        global.food_category = (catData && catData.length > 3) ? catData : defaultCategory;
    }
    catch (err) {
        console.log("DB connection error, loading default expanded food menu data:", err.message);
        global.food_items = defaultItems;
        global.food_category = defaultCategory;
    }
}
module.exports = mongodb;