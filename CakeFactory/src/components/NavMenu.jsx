const NavMenu =({setCurrentPage}) =>{
    return(
        <div className="nav-menu">
        <span className="link" onClick={()=>{setCurrentPage('home')}}>Home</span>
        <span className="link" onClick={()=>{setCurrentPage('shop')}}>Shop</span>
        <span className="link" onClick={()=>{setCurrentPage('contact')}}>Contact</span>
        
        </div> 
    );
};
export default NavMenu;
