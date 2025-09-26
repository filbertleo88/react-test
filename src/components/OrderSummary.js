export default function OrderSummary({ order, totalPrice, language }) {
  const orderItems = Object.values(order);

  return (
    <div>
      <div className="order-items">
        {orderItems.length === 0 ? (
          <div className="empty-order">{language === "en" ? "Your cart is empty." : "Keranjang Anda kosong."}</div>
        ) : (
          orderItems.map((item) => (
            <div key={item.id} className="order-item">
              <span className="order-item-name">{item.name}</span>
              <span className="order-item-quantity">x{item.quantity}</span>
              <span className="order-item-price">Rp {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>

      {orderItems.length > 0 && (
        <div className="order-summary">
          <div className="summary-row">
            <span>{language === "en" ? "Subtotal:" : "Subtotal:"}</span>
            <span>Rp {totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>{language === "en" ? "Tax (10%):" : "Pajak (10%):"}</span>
            <span>Rp {(totalPrice * 0.1).toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <strong>{language === "en" ? "Total:" : "Total:"}</strong>
            <span>Rp {(totalPrice * 1.1).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
