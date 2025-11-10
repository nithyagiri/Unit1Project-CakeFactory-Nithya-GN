import NavMenu from "./NavMenu";

const Header = (setCurrentPage) =>{
    return(
        <header>
           <div id ="cake">
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
              <strong><center>Cake Factory</center></strong>
           </div>
            <NavMenu setCurrentPage={setCurrentPage} />
        </header>
       

    );
};

export default Header;
