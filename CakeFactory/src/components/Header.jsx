import NavMenu from "./NavMenu";

const Header = (setCurrentPage) =>{
    return(
        <header>
           <div id ="cake">
              <strong>Cake Factory</strong>
           </div>
            <NavMenu setCurrentPage={setCurrentPage} />
        </header>
       

    );
};

export default Header;
