export default function OrderSummary({ order, totalPrice }) {
  const orderItems = Object.values(order);

  return (
    <div>
      <div className="order-items">
        {orderItems.length === 0 ? (
          <div className="empty-order">Your order is empty</div>
        ) : (
          orderItems.map((item) => (
            <div key={item.id} className="order-item">
              <span className="order-item-name">{item.name}</span>
              <span className="order-item-quantity">x{item.quantity}</span>
              <span className="order-item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        )}
      </div>

      {orderItems.length > 0 && (
        <div className="order-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (8%):</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${(totalPrice * 1.08).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
