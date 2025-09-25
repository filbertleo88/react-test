import { useState } from "react";
import { menuItems } from "./data";
import MenuItem from "./components/MenuItem";
import OrderSummary from "./components/OrderSummary";
import CustomerForm from "./components/CustomerForm";
import "./index.css";

export default function App() {
  const [order, setOrder] = useState({});
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

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

  const getTotalPrice = () =>
    Object.values(order).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(order).length === 0) {
      alert("Please add items to your order before submitting.");
      return;
    }
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert("Please fill in all required customer information.");
      return;
    }
    alert(
      `Order submitted successfully!\nTotal: $${getTotalPrice().toFixed(
        2
      )}\nThank you, ${customerInfo.name}!`
    );
  };

  return (
    <div className="container">
      <header>
        <h1>Food Ordering App</h1>
        <p className="app-description">
          Order your favorite meals with just a few clicks!
        </p>
      </header>

      <div className="app-content">
        <section className="menu-section">
          <h2 className="section-title">Our Menu</h2>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                quantity={order[item.id] ? order[item.id].quantity : 0}
                onAdd={() => addToOrder(item.id)}
                onRemove={() => removeFromOrder(item.id)}
              />
            ))}
          </div>
        </section>

        <section className="order-section">
          <h2 className="section-title">Your Order</h2>
          <OrderSummary order={order} totalPrice={getTotalPrice()} />
          <CustomerForm
            customerInfo={customerInfo}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </section>
      </div>
    </div>
  );
}
