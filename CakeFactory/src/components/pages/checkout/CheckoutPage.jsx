import { useNavigate } from "react-router";
import mockCake from "../../../test-data/mockCake";
import  "./checkout.css";

  const CheckoutPage = ({cart, setCart,setEditingItemId, setSelectedCake, setOrderTotal }) =>{
    const navigate =useNavigate();
    const handleEdit = (item) => {
    setEditingItemId(item.id);
    const fullCake = mockCake.find( cake => cake.id === item.originalCakeId); // getting cake data from mockdata
    setSelectedCake({
        ...fullCake,
        size:item.size,
        flavour:item.flavour,
        filling:item.filling,
        message:item.message
     } );
     navigate('/order');   
  };

    const handleDelete = (id) => {
          setCart(cart.filter(item => item.id !== id));
    };

    
    const CalculateTotal =()=>{
        return cart.reduce((sum, item) => 
            {
               let extra = 0;
               if (item.sizePrice) extra += item.sizePrice;
               if (item.fillingPrice) extra += item.fillingPrice;
                   return (sum + item.basePrice + extra);
            }, 0);
    };
    const getCakeTotal = (item) => {
           const extras = (item.sizePrice || 0) + (item.fillingPrice || 0);
           return  Number(((item.basePrice + extras) * item.quantity).toFixed(2));
};
    return(
        <div className ="checkout-container">
            <div className ="checkout-lft">
            <div className="checkout-header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            </div>

                {cart.length === 0 ? (<p>Your Cart is empty.</p>) : (
                    cart.map((item) =>(
                        <div className="checkout-card" key ={item.id} >
                            <img src ={"https://i.ibb.co/" + item.imageId} className="checkout-img" alt ={item.name}/> 
                        <div className="checkout-details"> 
                        <h3 className="cake-name">{item.name}</h3>
                        <ul>
                            {item.size && <li><p><b>Size:</b> {item.size}</p></li>}
                            {item.flavour && <li><p><b>Flavour:</b> {item.flavour}</p></li>}
                            {item.filling && <li><p><b>Filling:</b> {item.filling}</p></li>}
                            {item.message && <li><p><b>Message:</b> {item.message}</p></li>}
                        </ul> 
                        
                        </div>    
                        <div >
                            <p>{item.quantity}</p>   
                        </div>
                        <div className="checkout-price">
                            <p>${getCakeTotal(item)}  </p>    
                        </div> 
                        <div>  
                            <button onClick={() => { handleEdit(item)}}>Edit  </button>     
                            <button onClick={() => { handleDelete(item.id)}}>Delete</button>
                        </div> 
                        </div> 
                    ))
                )}
            </div>
            <div className="checkout-summary">
                <h2> Order Summary</h2>
                <p><b> Order Total:</b>${CalculateTotal()}</p>
                <button className="common-btn" 
                        onClick={() =>{ 
                          const total = CalculateTotal(); 
                          setOrderTotal(total);         
                          navigate('/payment')}}
                >Checkout 
                </button> 
                <button className="continue-btn" onClick={() => { navigate("/shop")}}> Continue Shopping </button>
            </div>
        </div>    
    );
};
export default CheckoutPage;