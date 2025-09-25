export default function MenuItem({ item, quantity, onAdd, onRemove }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3 className="menu-item-title">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">${item.price.toFixed(2)}</span>
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={onRemove} disabled={quantity === 0}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={onAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
