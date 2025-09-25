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
                Rp {(item.price * item.quantity)}
              </span>
            </div>
          ))
        )}
      </div>

      {orderItems.length > 0 && (
        <div className="order-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>Rp {totalPrice}</span>
          </div>
          <div className="summary-row">
            <span>Tax (10%):</span>
            <span>Rp {(totalPrice * 0.10)}</span>    
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>Rp {(totalPrice * 1.10).toFixed(0)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
