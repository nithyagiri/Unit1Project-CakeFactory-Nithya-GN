import CakeCard from "./CakeCard";
const ShopPage =({cakes}) => {
  let cakeJSX=[...cakes].map(cake=>{
    return<CakeCard key={cake.id} cake ={cake}/>
  })
    return(
      <main className="main-content">
      <h1>All Occasion Cakes and Cupcakes</h1>
      {cakes.length ? (<div id="cake-card-container">{cakeJSX}</div>):
      ( <p> We're sorry, there are no cakes to order at  this time. Please visit again. 
        Thanks you for visiting our site </p>)}
    </main>
    );
};
export default ShopPage;
 