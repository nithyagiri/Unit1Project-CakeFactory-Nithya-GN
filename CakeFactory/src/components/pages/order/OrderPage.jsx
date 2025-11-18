import {useState, useEffect} from 'react';
import Input from "./input/Input.jsx";
import Select from ".//input/Select.jsx";
import Button from "./input/Button.jsx";

const OrderPage = ({ cake, setCurrentPage, setCart, editingItemId, setEditingItemId}) => {
  const [form, setForm] = useState({
    size: "",
    flavour: "",
    filling: "",
    message: ""
  });
  let sizeOptions = [];
  let flavourOptions = [];
  let fillingOptions = [];
  let canWriteMessage = false;

    if(cake.customization){
        if (cake.customization.sizes){
            sizeOptions = cake.customization.sizes.map(s => ({
                label: `${s.label} (+$${s.addPrice})`,
                value: s.label,
                addPrice: s.addPrice
      }));
    }
    if (cake.customization.flavors) {
      flavourOptions = cake.customization.flavors.map(f => ({
                label: f.name,
                value: f.name
      }));
    }

    if (cake.customization.fillings) {
      fillingOptions = cake.customization.fillings.map(f => ({
                label: `${f.label} (+$${f.addPrice})`,
                value: f.label,
                addPrice: f.addPrice
      }));
    }

    canWriteMessage = cake.customization.canWriteMessage || false;
  }
   // Populate form when editing
  useEffect(() => {
    if (cake && editingItemId) {
      setForm({
        size: cake.size || "",
        flavour: cake.flavour || "",
        filling: cake.filling || "",
        message: cake.message || ""
      });
    }
  }, [cake, editingItemId]);
   const getPrice = (type, value) => {
    if (!value) return 0;
    let option;
    switch (type) {
      case "size":
        option = sizeOptions.find((o) => o.value === value);
        break;
      case "filling":
        option = fillingOptions.find((o) => o.value === value);
        break;
      default:
        return 0;
    }
    return option.addPrice || 0;
  };

   const handleSubmit = () => {
     const orderItem ={
        id: editingItemId || Date.now(),
        originalCakeId: cake.id, 
        name: cake.name,
        basePrice: cake.price,
        size: form.size,
        flavour: form.flavour,
        message: form.message,
        sizePrice: getPrice("size", form.size),
        fillingPrice: getPrice("filling",form.filling),
        imageId: cake.imageId,
        customize:cake.customize
     };
     setCart(prev => {
        if (editingItemId){
            return prev.map(item =>
                item.id ===editingItemId ? orderItem :item);
            }
            return [...prev, orderItem];
        });
     setEditingItemId(null);   
     setCurrentPage("checkout");
  };
  if (!cake) {
    return (
      <div>
        <h2>No Cake Selected</h2>
        <p>Please return to the Shop page and select a cake.</p>
        <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
      </div>
    );
  }
  const getImageURL = () => { return 'https://i.ibb.co/' + cake.imageId;}
  
  return (
     <div className="order-layout">
           <img className="cake-card-image"
                src={getImageURL()}
                alt={`Image of ${cake.name} `} // accessability
            />   
      <div className="details">
        <h1>{cake.name}</h1>
        <p>{cake.description}</p>
        <p><b>Price:</b> ${cake.price}</p>
        {cake.customize === "yes" && (
        <div className="custom-form">
          <Select
            label="Size"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            options={sizeOptions}
          />
          <Select
            label="Flavour"
            value={form.flavour}
            onChange={(e) => setForm({ ...form, flavour: e.target.value })}
            options={flavourOptions}
          />
         <Select
            label="Filling"
            value={form.filling}
            onChange={(e) => setForm({ ...form, filling: e.target.value })}
            options={fillingOptions}
          />
          {canWriteMessage && (
            <Input
              label="Message on Cake"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          )}

          <Button label={editingItemId? "Update Cart" : "Add to cart"} onClick={handleSubmit}/>
        </div>
        )}
         {cake.customize !== "yes" && (
          <Button label={editingItemId? "Update Cart" : "Add to cart"} onClick={handleSubmit}/>
        )}
        </div>  
      </div>
 );
};
export default OrderPage;