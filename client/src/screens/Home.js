import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousal from '../components/Carousal'

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filterVeg, setFilterVeg] = useState("All"); // All, Veg, Non-Veg
  const [searchedString, setSearchedString] = useState("");
  const [cardButton, setcardButton] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  async function loadData() {
    try {
      let response = await fetch("/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      response = await response.json();
      if (response && Array.isArray(response) && response.length >= 2) {
        setFoodCat(response[1] || []);
        setFoodItem(response[0] || []);
      }
    } catch (e) {
      console.error("Failed to load food data:", e);
    }
  }

  useEffect(() => {
    loadData()
  }, []);

  const filteredItems = foodItem.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.CategoryName === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchedString.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchedString.toLowerCase()));
    
    let isVeg = true;
    const nameLower = item.name.toLowerCase();
    if (nameLower.includes("chicken") || nameLower.includes("pepperoni") || nameLower.includes("egg") || nameLower.includes("meat")) {
      isVeg = false;
    }

    const matchesDiet = filterVeg === "All" || (filterVeg === "Veg" && isVeg) || (filterVeg === "Non-Veg" && !isVeg);

    return matchesCategory && matchesSearch && matchesDiet;
  });

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      
      {cardButton && showAlert && (
        <div className="alert alert-warning alert-dismissible fade show container mt-3 shadow-sm" role="alert">
          <strong>Hola Foodie! 😋</strong> Please login first to add delicious items to your cart.
          <button type="button" className="btn-close" onClick={() => setcardButton(false)} aria-label="Close"></button>
        </div>
      )}

      <Carousal setSearchedString={setSearchedString} />

      {/* Interactive Quick Filter Bar */}
      <div className="container mt-4 mb-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 p-3 bg-white rounded shadow-sm border">
          {/* Category Tabs */}
          <div className="d-flex flex-wrap gap-2">
            <button 
              className={`btn btn-sm ${activeCategory === "All" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setActiveCategory("All")}
            >
              🍽️ All Menu
            </button>
            {foodCat.map((cat, idx) => (
              <button 
                key={idx} 
                className={`btn btn-sm ${activeCategory === cat.CategoryName ? "btn-dark" : "btn-outline-secondary"}`}
                onClick={() => setActiveCategory(cat.CategoryName)}
              >
                {cat.CategoryName}
              </button>
            ))}
          </div>

          {/* Veg / Non-Veg Diet Filter */}
          <div className="btn-group btn-group-sm" role="group">
            <button 
              className={`btn ${filterVeg === "All" ? "btn-success" : "btn-outline-success"}`}
              onClick={() => setFilterVeg("All")}
            >
              All Diets
            </button>
            <button 
              className={`btn ${filterVeg === "Veg" ? "btn-success" : "btn-outline-success"}`}
              onClick={() => setFilterVeg("Veg")}
            >
              🟢 Veg Only
            </button>
            <button 
              className={`btn ${filterVeg === "Non-Veg" ? "btn-danger" : "btn-outline-danger"}`}
              onClick={() => setFilterVeg("Non-Veg")}
            >
              🔴 Non-Veg Only
            </button>
          </div>
        </div>

        {/* Results Badge */}
        <div className="mt-3 text-muted d-flex justify-content-between align-items-center">
          <small className="fw-bold fs-6">
            Showing <span className="badge bg-primary fs-6">{filteredItems.length}</span> delicious dishes
          </small>
          {searchedString && (
            <small className="text-secondary">
              Search results for: "<strong>{searchedString}</strong>"
            </small>
          )}
        </div>
      </div>

      {/* Food Items Display Section */}
      <div className="container pb-5">
        {foodCat.length > 0 ? (
          (activeCategory === "All" ? foodCat : foodCat.filter(c => c.CategoryName === activeCategory)).map((data, index) => {
            const categoryDishes = filteredItems.filter(item => item.CategoryName === data.CategoryName);
            if (categoryDishes.length === 0) return null;

            return (
              <div key={index} className="my-4 p-3 bg-white rounded shadow-sm">
                <h3 className="border-bottom pb-2 text-dark font-weight-bold" style={{ letterSpacing: "0.5px" }}>
                  {data.CategoryName}
                </h3>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
                  {categoryDishes.map((categFoodItem) => (
                    <div key={categFoodItem._id} className="col d-flex justify-content-center">
                      <Cards 
                        imglink={categFoodItem.img} 
                        title={categFoodItem.name} 
                        description={categFoodItem.description} 
                        options={categFoodItem.options[0]} 
                        setcardButton={setcardButton} 
                        id={categFoodItem._id} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center my-5 py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading food menu...</span>
            </div>
            <p className="mt-2 text-muted">Fetching fresh menu items...</p>
          </div>
        )}

        {filteredItems.length === 0 && foodCat.length > 0 && (
          <div className="text-center my-5 p-5 bg-white rounded shadow-sm">
            <h4>🔍 No dishes found</h4>
            <p className="text-muted">Try adjusting your search query or filters.</p>
            <button className="btn btn-outline-primary btn-sm" onClick={() => { setActiveCategory("All"); setFilterVeg("All"); setSearchedString(""); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
