export default function MenuItem({ item, quantity, onAdd, onRemove, language }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3 className="menu-item-title">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">
            {language === "en" ? "Rp " : "Rp "}
            {item.price.toLocaleString()}
          </span>
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={onRemove} disabled={quantity === 0} title={language === "en" ? "Remove one" : "Kurangi satu"}>
              −
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={onAdd} title={language === "en" ? "Add one" : "Tambah satu"}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
