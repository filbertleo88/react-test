export default function CustomerForm({ customerInfo, onInputChange, onSubmit, language }) {
  return (
    <form className="customer-form" onSubmit={onSubmit}>
      <h3 className="section-title">{language === "en" ? "Customer Information" : "Data Pelanggan"}</h3>

      <label>
        {language === "en" ? "Name*" : "Nama*"}
        <input type="text" name="name" value={customerInfo.name} onChange={onInputChange} required />
      </label>

      <label>
        {language === "en" ? "Phone*" : "Telepon*"}
        <input type="tel" name="phone" value={customerInfo.phone} onChange={onInputChange} required />
      </label>

      <label>
        {language === "en" ? "Address*" : "Alamat*"}
        <textarea name="address" value={customerInfo.address} onChange={onInputChange} required />
      </label>

      <label>
        {language === "en" ? "Notes (optional)" : "Catatan (opsional)"}
        <textarea name="notes" value={customerInfo.notes} onChange={onInputChange} placeholder={language === "en" ? "e.g., Extra cheese, Large size" : "contoh: Extra keju, Ukuran besar"} />
      </label>

      <button type="submit" className="submit-btn">
        {language === "en" ? "Place Order" : "Pesan"}
      </button>
    </form>
  );
}
