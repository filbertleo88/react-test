export default function CustomerForm({ customerInfo, onInputChange, onSubmit }) {
  return (
    <form className="customer-form" onSubmit={onSubmit}>
      <h3 className="section-title">Customer Information</h3>

      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" value={customerInfo.name} onChange={onInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input type="tel" id="phone" name="phone" value={customerInfo.phone} onChange={onInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Delivery Address *</label>
        <textarea id="address" name="address" rows="3" value={customerInfo.address} onChange={onInputChange} required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Special Instructions</label>
        <textarea id="notes" name="notes" rows="2" value={customerInfo.notes} onChange={onInputChange} placeholder="Any special requests or dietary restrictions?"></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Place Order
      </button>
    </form>
  );
}
