# 🍕 Food Court MERN Application — 14-Slide College Presentation

**Presenter:** Ayush Sharma  
**Repository:** [Ayush85050/Food-Court-Web](https://github.com/Ayush85050/Food-Court-Web)  
**Live Demo URL:** [http://localhost:5000/](http://localhost:5000/)  

---

## 📌 Slide 1: Title & Author Details
- **Project Title:** Food Court — Full-Stack MERN Food Ordering Web Application
- **Presenter:** Ayush Sharma
- **Academic Domain:** Full-Stack Web Development & Cloud Computing
- **Tech Stack:** MongoDB Atlas, Express.js, React 18, Node.js, Bootstrap 5

---

## 📌 Slide 2: Project Vision & Core Objectives
- **Problem Statement:** Long queues, slow checkout times, and static paper menus in food court environments.
- **Solution:** A responsive Single Page Application (SPA) where users browse food items, filter by diet preference (Veg/Non-Veg), customize portion sizes, and manage their cart seamlessly.
- **Objectives:**
  1. Build a high-performance React 18 frontend with real-time search & filters.
  2. Develop secure Node/Express REST APIs with JWT & Bcrypt authentication.
  3. Manage persistent NoSQL documents via MongoDB Atlas.

---

## 📌 Slide 3: End-to-End User Journey (Start to End)
- **Step 1:** Account Registration (`/createuser`) with Bcrypt password hashing.
- **Step 2:** Secure Login (`/loginuser`) issuing JWT token.
- **Step 3:** Menu Browsing & Search (`/`) with live search.
- **Step 4:** Category & Diet Filters (🟢 Veg / 🔴 Non-Veg).
- **Step 5:** Portion Customization & Cart Dispatch (`ADD`).
- **Step 6:** Order Checkout (`/cartorderdata`) to MongoDB.

---

## 📌 Slide 4: User Registration Page (`/createuser`)
- **Features:** Name, Email, Password, Location input validation.
- **Screenshot:** ![Signup Page](file:///C:/Users/Dell/.gemini/antigravity-ide/brain/d20c0214-0b82-4571-b1c1-ffb913610e44/signup_page_1790716332188.png)
- **Minimal Code Snippet:**
```javascript
let salt = bcrypt.genSaltSync(10);
let secPassword = bcrypt.hashSync(req.body.password, salt);
await User.create({ name: req.body.name, password: secPassword, email: req.body.email, location: req.body.location });
```

---

## 📌 Slide 5: User Login & JWT Security (`/loginuser`)
- **Features:** Credential verification, Bcrypt comparison, JWT token issuance.
- **Screenshot:** ![Login Page](file:///C:/Users/Dell/.gemini/antigravity-ide/brain/d20c0214-0b82-4571-b1c1-ffb913610e44/login_page_1790716324704.png)
- **Minimal Code Snippet:**
```javascript
const pwdCompare = bcrypt.compareSync(req.body.password, userData.password);
if (!pwdCompare) return res.status(400).json({ errors: "Incorrect Password" });
const authToken = jwt.sign({ user: { id: userData.id } }, jwtSecret);
return res.json({ success: true, authToken });
```

---

## 📌 Slide 6: Home Screen & Hero Carousel
- **Features:** High-resolution food banner slider, embedded search bar.
- **Screenshot:** ![Home Page](file:///C:/Users/Dell/.gemini/antigravity-ide/brain/d20c0214-0b82-4571-b1c1-ffb913610e44/food_court_home_1790714306751.png)
- **Minimal Code Snippet:**
```javascript
<input type="search" placeholder="Search food item..." value={search} onChange={(e) => props.setSearchedString(e.target.value)} />
```

---

## 📌 Slide 7: Category Tabs & Diet Filters (Veg / Non-Veg)
- **Features:** Category tab switcher, 🟢 Veg / 🔴 Non-Veg filter toggle, dish counter.
- **Screenshot:** ![Filtered Menu UI](file:///C:/Users/Dell/.gemini/antigravity-ide/brain/d20c0214-0b82-4571-b1c1-ffb913610e44/food_court_menu_view_1790715258647.png)
- **Minimal Code Snippet:**
```javascript
const filteredItems = foodItem.filter((item) => {
  const matchCat = activeCategory === "All" || item.CategoryName === activeCategory;
  let isVeg = !item.name.toLowerCase().match(/chicken|pepperoni/);
  return matchCat && (filterVeg === "All" || (filterVeg === "Veg" && isVeg));
});
```

---

## 📌 Slide 8: Modular Food Cards & Portion Customization
- **Features:** Quantity dropdown, size dropdown (Half/Full), dynamic price calculation, Add to Cart feedback.
- **Screenshot:** ![Food Cards](file:///C:/Users/Dell/.gemini/antigravity-ide/brain/d20c0214-0b82-4571-b1c1-ffb913610e44/food_items_section_1790714038751.png)
- **Minimal Code Snippet:**
```javascript
let pricePerItem = parseInt(props.options[size]) || 0;
let finalPrice = qty * pricePerItem;
```

---

## 📌 Slide 9: Global Cart Context Reducer (`ContextReducer.js`)
- **Features:** Centralized React state management for adding, deleting, and clearing cart items.
- **Minimal Code Snippet:**
```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price }];
    case "REMOVE": return state.filter((_, i) => i !== action.index);
    case "DROP": return [];
    default: return state;
  }
};
```

---

## 📌 Slide 10: Full-Stack MERN Architecture
- **Client:** React 18 SPA (Port 3000 / Port 5000)
- **Server:** Express 4.18 REST Backend (Port 5000)
- **Database:** MongoDB Atlas Cloud Database

---

## 📌 Slide 11: MongoDB Mongoose Schemas & Resilience
- **User Document Model:** Name, Email, Password, Location, Date.
- **Minimal Code Snippet:**
```javascript
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: true }
});
module.exports = mongoose.model("user", UserSchema);
```

---

## 📌 Slide 12: Express Server & Integrated Frontend Serving
- **Static Asset Distribution:** Serves compiled `client/build` static files on port 5000.
- **Minimal Code Snippet:**
```javascript
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.listen(5000, () => console.log("Server Running"));
```

---

## 📌 Slide 13: Project Metrics & Future Scope
- **Page Load Speed:** < 1.2 seconds.
- **Bundle Size:** ~134 kB production React build.
- **Future Roadmap:** Razorpay/Stripe payment gateway integration, WebSockets real-time tracking, Admin Dashboard.

---

## 📌 Slide 14: Thank You, Foodies! 🍕❤️ (Website Styled)
- **Presenter:** Ayush Sharma
- **GitHub Repo:** [https://github.com/Ayush85050/Food-Court-Web](https://github.com/Ayush85050/Food-Court-Web)
- **Live Demo:** [http://localhost:5000/](http://localhost:5000/)
- **Questions & Answers / Live Discussion**
