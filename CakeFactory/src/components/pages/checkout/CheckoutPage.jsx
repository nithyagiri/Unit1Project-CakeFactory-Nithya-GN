import mockCake from "../../../test-data/mockCake";

const CheckoutPage = ({cart, setCart,setCurrentPage,setEditingItemId, setSelectedCake }) =>{
    const handleEdit = (item) => {
    setEditingItemId(item.id);
    const fullCake = mockCake.find( cake => cake.id === item.originalCakeId); // getting cake data from mockdata
    setSelectedCake({
        ...fullCake,
        size:item.size,
        flavour:item.flavors,
        filling:item.filling,
        message:item.message
     } );
    setCurrentPage("order");
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
    return(
        <div >
            <button onClick={() => setCurrentPage("order")}>
             ← Back to Order Page
            </button>
            <div className ="checkout-items">
                <h2> Your Order</h2>
                {cart.length === 0 ? (<p>Your Cart is empty.</p>) : (
                    cart.map((item) =>(
                        <div key ={item.id} >
                            <img src ={"https://i.ibb.co/" + item.imageId} alt ={item.name}/> 
                        <div>
                            <h3>{item.name}</h3>
                            {item.size && <p><b>Size:</b> {item.size}</p>}
                            {item.flavour && <p><b>Flavour:</b> {item.flavour}</p>}
                            {item.filling && <p><b>Filling:</b> {item.filling}</p>}
                            {item.message && <p><b>Message:</b> {item.message}</p>}
                            <p><b>Price:</b> ${item.basePrice}</p>      
                            <button  onClick={() => {
                                handleEdit(item)}}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                        </div> 
                    ))
                )}
            </div>
            <div className="checkout-summary">
                <h2> Order Summary</h2>
                <p><b> Total:</b>${CalculateTotal()}</p>
                <button>Checkout</button>  
            </div>
        </div>    
    );
};
export default CheckoutPage;