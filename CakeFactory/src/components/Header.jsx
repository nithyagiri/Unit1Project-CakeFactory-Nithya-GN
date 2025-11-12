import NavMenu from "./NavMenu";
const Header = (setCurrentPage) =>{
    return(
        <header>
           <div id="cake">
            <strong><center>Cake Factory</center></strong>
            </div>
            <NavMenu setCurrentPage={setCurrentPage} />
        </header>
       

    );
};

export default Header;
