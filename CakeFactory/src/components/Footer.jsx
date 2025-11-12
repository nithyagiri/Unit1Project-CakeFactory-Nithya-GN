const Footer =() => {
    let thisYear = new Date().getFullYear();
    return(
        <footer>
            <div>&copy; {thisYear}  Cake Factory|| All rights reserved</div>
        </footer>
    )
}
export default Footer;
                    