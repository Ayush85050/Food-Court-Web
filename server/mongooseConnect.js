const mongoose = require("mongoose");

const defaultCategory = [
    { CategoryName: "Biryani/Rice" },
    { CategoryName: "Starter" },
    { CategoryName: "Pizza" }
];

const defaultItems = [
    {
        _id: "1",
        CategoryName: "Biryani/Rice",
        name: "Chicken Biryani",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        options: [{ "half": "130", "full": "220" }],
        description: "Delicious spicy chicken biryani served with raita"
    },
    {
        _id: "2",
        CategoryName: "Starter",
        name: "Paneer Tikka",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500",
        options: [{ "half": "110", "full": "200" }],
        description: "Smoky grilled paneer marinated in aromatic spices"
    },
    {
        _id: "3",
        CategoryName: "Pizza",
        name: "Margherita Pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
        options: [{ "regular": "150", "medium": "280", "large": "420" }],
        description: "Classic pizza with fresh mozzarella and basil leaves"
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
        global.food_items = data.length ? data : defaultItems;

        const categoryCollection = await mongoose.connection.db.collection("category");
        const catData = await categoryCollection.find({}).toArray();
        global.food_category = catData.length ? catData : defaultCategory;
    }
    catch (err) {
        console.log("DB connection error, loading default food menu data:", err.message);
        global.food_items = defaultItems;
        global.food_category = defaultCategory;
    }
}
module.exports = mongodb;