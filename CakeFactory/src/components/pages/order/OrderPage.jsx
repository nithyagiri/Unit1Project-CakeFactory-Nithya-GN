import Input from "./input/Input.jsx";
import Select from ".//input/Select.jsx";
import Button from "./input/Button.jsx";

const OrderPage = ({ cake }) => {
  const [form, setForm] = useState({
    size: "",
    flavour: "",
    filling: "",
    message: ""
  });

  return (

     <div className="order-layout">
      <div className="image-box">
      <img src={`https://i.ibb.co/${cake.imageId}`} alt={cake.name} />
      </div>    
      <div className="details">

        <h2>{cake.name}</h2>
        <p>{cake.description}</p>
        <p><b>Price:</b> ${cake.price}</p>
        {cake.customize === "yes" && (
        <div className="custom-form">

          <Select
            label="Size"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            options={cake.customization.sizes.map(s => ({
              label: `${s.label} (+$${s.addPrice})`,
              value: s.label
            }))}
          />

          <Select
            label="Flavour"
            value={form.flavour}
            onChange={(e) => setForm({ ...form, flavour: e.target.value })}
            options={cake.customization.flavours}
          />

          <Select
            label="Filling"
            value={form.filling}
            onChange={(e) => setForm({ ...form, filling: e.target.value })}
            options={cake.customization.fillings.map(f => ({
              label: `${f.label} (+$${f.addPrice})`,
              value: f.label
            }))}
          />

          {cake.customization.canWriteMessage && (
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