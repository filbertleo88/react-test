// import { useState } from "react";
// import { menuItems } from "./data";
// import MenuItem from "./components/MenuItem";
// import OrderSummary from "./components/OrderSummary";
// import CustomerForm from "./components/CustomerForm";
// import "./index.css";

// export default function App() {
//   const [order, setOrder] = useState({});
//   const [customerInfo, setCustomerInfo] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     notes: "",
//   });

//   const addToOrder = (itemId) => {
//     setOrder((prev) => {
//       const newOrder = { ...prev };
//       if (newOrder[itemId]) {
//         newOrder[itemId].quantity += 1;
//       } else {
//         newOrder[itemId] = {
//           ...menuItems.find((i) => i.id === itemId),
//           quantity: 1,
//         };
//       }
//       return newOrder;
//     });
//   };

//   const removeFromOrder = (itemId) => {
//     setOrder((prev) => {
//       const newOrder = { ...prev };
//       if (newOrder[itemId]) {
//         if (newOrder[itemId].quantity > 1) {
//           newOrder[itemId].quantity -= 1;
//         } else {
//           delete newOrder[itemId];
//         }
//       }
//       return newOrder;
//     });
//   };

//   const getTotalPrice = () => Object.values(order).reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.keys(order).length === 0) {
//       alert("Please add items to your order before submitting.");
//       return;
//     }
//     if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
//       alert("Please fill in all required customer information.");
//       return;
//     }
//     alert(`Order submitted successfully!\nTotal: Rp ${getTotalPrice()}\nThank you, ${customerInfo.name}!`);
//   };

//   return (
//     <div className="container">
//       {/* Header  */}
//       <header>
//         <h1>Food Ordering App</h1>
//         <p className="app-description">Order your favorite meals with just a few clicks!</p>
//       </header>

//       <div className="app-content">
//         {/* Menu Order */}
//         <section className="menu-section">
//           <h2 className="section-title">Our Menu</h2>
//           <div className="menu-grid">
//             {menuItems.map((item) => (
//               <MenuItem key={item.id} item={item} quantity={order[item.id] ? order[item.id].quantity : 0} onAdd={() => addToOrder(item.id)} onRemove={() => removeFromOrder(item.id)} />
//             ))}
//           </div>
//         </section>

//         {/* Pesanan dan Informasi Pelanggan */}
//         <section className="order-section">
//           <h2 className="section-title">Your Order</h2>
//           <OrderSummary order={order} totalPrice={getTotalPrice()} />
//           <CustomerForm customerInfo={customerInfo} onInputChange={handleInputChange} onSubmit={handleSubmit} />
//         </section>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { menuItems } from "./data";
import MenuItem from "./components/MenuItem";
import OrderSummary from "./components/OrderSummary";
import CustomerForm from "./components/CustomerForm";
import BackToTop from "./components/BackToTop";
import "./index.css";

export default function App() {
  const [order, setOrder] = useState({});
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [language, setLanguage] = useState("en"); // EN / ID toggle
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isStarted, setIsStarted] = useState(false); // Landing page control
  const [userName, setUserName] = useState("");

  // Add to order
  const addToOrder = (itemId) => {
    setOrder((prev) => {
      const newOrder = { ...prev };
      if (newOrder[itemId]) {
        newOrder[itemId].quantity += 1;
      } else {
        newOrder[itemId] = {
          ...menuItems.find((i) => i.id === itemId),
          quantity: 1,
        };
      }
      return newOrder;
    });
  };

  // Remove from order
  const removeFromOrder = (itemId) => {
    setOrder((prev) => {
      const newOrder = { ...prev };
      if (newOrder[itemId]) {
        if (newOrder[itemId].quantity > 1) {
          newOrder[itemId].quantity -= 1;
        } else {
          delete newOrder[itemId];
        }
      }
      return newOrder;
    });
  };

  // Total price
  const getTotalPrice = () => Object.values(order).reduce((total, item) => total + item.price * item.quantity, 0);

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit order
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(order).length === 0) {
      alert(language === "en" ? "Please add items to your order before submitting." : "Silakan tambahkan item ke pesanan Anda sebelum mengirim.");
      return;
    }
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert(language === "en" ? "Please fill in all required customer information." : "Harap isi semua informasi pelanggan yang diperlukan.");
      return;
    }
    alert(
      `${language === "en" ? "Order submitted successfully!" : "Pesanan berhasil dikirim!"}\n${language === "en" ? "Total:" : "Total:"} Rp ${getTotalPrice().toLocaleString()}\n${language === "en" ? "Thank you" : "Terima kasih"}, ${
        customerInfo.name
      }!`
    );
  };

  // Filter items
  const filteredItems = selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory);

  // Available categories
  const categories = ["All", "Food", "Drinks", "Snacks"];

  // Landing page submit
  const handleStart = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert(language === "en" ? "Please enter your name to continue." : "Silakan masukkan nama Anda untuk melanjutkan.");
      return;
    }
    setIsStarted(true);
    setCustomerInfo((prev) => ({ ...prev, name: userName }));
  };

  return (
    <div className="container">
      {/* Landing Page */}
      {!isStarted ? (
        <div className="landing-page">
          <h1>🍽️ Food Ordering App</h1>
          <p>{language === "en" ? "Welcome! Please enter your name to start ordering." : "Selamat datang! Masukkan nama Anda untuk mulai memesan."}</p>

          <form onSubmit={handleStart} className="landing-form">
            <input type="text" placeholder={language === "en" ? "Enter your name" : "Masukkan nama Anda"} value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <button type="submit">{language === "en" ? "Start Ordering" : "Mulai Memesan"}</button>
          </form>

          {/* Language toggle */}
          <button className="language-toggle" onClick={() => setLanguage(language === "en" ? "id" : "en")}>
            {language === "en" ? "Switch to Indonesian" : "Ganti ke Inggris"}
          </button>
        </div>
      ) : (
        <>
          {/* Header */}
          <header>
            <h1>
              {language === "en" ? "Hello" : "Halo"}, {userName} 👋
            </h1>
            <p className="app-description">{language === "en" ? "Order your favorite meals with just a few clicks!" : "Pesan makanan favorit Anda hanya dengan beberapa klik!"}</p>

            {/* Language toggle */}
            <button className="language-toggle" onClick={() => setLanguage(language === "en" ? "id" : "en")}>
              {language === "en" ? "Switch to Indonesian" : "Ganti ke Inggris"}
            </button>
          </header>

          <div className="app-content">
            {/* Menu Section */}
            <section className="menu-section">
              <h2 className="section-title">{language === "en" ? "Our Menu" : "Menu Kami"}</h2>

              {/* Category Filters */}
              <div className="category-filters">
                {categories.map((cat) => (
                  <button key={cat} className={selectedCategory === cat ? "active" : ""} onClick={() => setSelectedCategory(cat)}>
                    {language === "en" ? cat : cat === "All" ? "Semua" : cat === "Food" ? "Makanan" : cat === "Drinks" ? "Minuman" : "Camilan"}
                  </button>
                ))}
              </div>

              {/* Menu Grid */}
              <div className="menu-grid">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} quantity={order[item.id] ? order[item.id].quantity : 0} onAdd={() => addToOrder(item.id)} onRemove={() => removeFromOrder(item.id)} language={language} />
                ))}
              </div>
            </section>

            {/* Order + Customer Info */}
            <section className="order-section">
              <h2 className="section-title">{language === "en" ? "Your Order" : "Pesanan Anda"}</h2>
              <OrderSummary order={order} totalPrice={getTotalPrice()} language={language} />
              <CustomerForm customerInfo={customerInfo} onInputChange={handleInputChange} onSubmit={handleSubmit} language={language} />
            </section>
          </div>
        </>
      )}
      <BackToTop />
    </div>
  );
}
