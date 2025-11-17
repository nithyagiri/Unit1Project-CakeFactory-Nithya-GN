import {useState} from 'react';
import Input from "./input/Input.jsx";
import Select from ".//input/Select.jsx";
import Button from "./input/Button.jsx";




const OrderPage = ({ cake, setCurrentPage}) => {
  if (!cake) {
    return (
      <div>
        <h2>No Cake Selected</h2>
        <p>Please return to the Shop page and select a cake.</p>
        <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
      </div>
    );
  }

  const [form, setForm] = useState({
    size: "",
    flavour: "",
    filling: "",
    message: ""
  });
   const handleSubmit = () => {
    console.log("Order submitted:", form);
    alert("Order added to cart!");
  };

  const getImageURL = () => {
        return 'https://i.ibb.co/' + cake.imageId;
    }
  let sizeOptions = [];
  let flavourOptions = [];
  let fillingOptions = [];
  let canWriteMessage = false;

    if(cake.customization){
        if (cake.customization.sizes){
            sizeOptions = cake.customization.sizes.map(s => ({
                label: `${s.label} (+$${s.addPrice})`,
                value: s.label
      }));
    }
    if (cake.customization.flavours) {
      flavourOptions = cake.customization.flavours;
    }

    if (cake.customization.fillings) {
      fillingOptions = cake.customization.fillings.map(f => ({
        label: `${f.label} (+$${f.addPrice})`,
        value: f.label
      }));
    }

    canWriteMessage = cake.customization.canWriteMessage || false;
  }

    
  return (

     <div className="order-layout">
      <img 
                className="cake-card-image"
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

          <Button 
            label="Add to Cart"
            onClick={handleSubmit}
          />

        </div>
        )}
         {cake.customize !== "yes" && (
          <Button
            label={"Add to cart"}
            onClick={handleSubmit}
          />
        )}
        </div>  
      </div>
 )};
 export default OrderPage;