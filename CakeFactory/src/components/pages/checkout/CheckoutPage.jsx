import mockCake from "../../../test-data/mockCake";
import  "./checkout.css";

  const CheckoutPage = ({cart, setCart,setCurrentPage,setEditingItemId, setSelectedCake, setOrderTotal }) =>{

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
     setCurrentPage('order');   
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
                   return sum + item.basePrice + extra;
            }, 0);
    };
    const getCakeTotal = (item) => {
           const extras = (item.sizePrice || 0) + (item.fillingPrice || 0);
           return  (item.basePrice + extras) * item.quantity;
};
    return(
        <div className ="checkout-container">
            <div className ="checkout-left">
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
                            <h3><bold>{item.name}</bold></h3>
                            {item.size && <p><b>Size:</b> {item.size}</p>}
                            {item.flavour && <p><b>Flavour:</b> {item.flavour}</p>}
                            {item.filling && <p><b>Filling:</b> {item.filling}</p>}
                            {item.message && <p><b>Message:</b> {item.message}</p>}
                            <button className="edit-btn" onClick={() => { handleEdit(item)}}>Edit</button>
                        </div> 
                        <div className="checkout-qty">
                            <p>{item.quantity}</p>   
                        </div>
                        <div className="checkout-price">
                            <p><b>Price:</b> ${getCakeTotal(item)}  </p>    
                        </div> 
                        <div className="checkout-delete">       
                            <button onClick={() => { handleDelete(item.id)}}>Delete</button>
                        </div> 
                        </div> 
                    ))
                )}
            </div>
            <div className="checkout-summary">
                <h2> Order Summary</h2>
                <p><b> Order Total:</b>${CalculateTotal()}</p>
                <button className="checkout-btn" 
                        onClick={() =>{ 
                          const total = CalculateTotal(); 
                          setOrderTotal(total);         
                          setCurrentPage('payment')}}
                >Checkout 
                </button> 
                <button className="continue-btn" onClick={() => { setCurrentPage("shop")}}> Continue Shopping </button>
            </div>
        </div>    
    );
};
export default CheckoutPage;