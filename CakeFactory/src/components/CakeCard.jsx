import Card from'./Card.jsx';
const CakeCard =({cake}) =>{
    const getImageURL = () => {
        return 'https://i.ibb.co/' + cake.imageId;
    }
    return (
        <Card>
            <img 
                className="cake-card-image"
                src={getImageURL()}
                alt={`Image of ${cake.name} `} // accessability
            />
            <div className="cake-card-text">
                <h5>{cake.name}</h5>
                <h6>{cake.description} </h6>
                <h6>{`${cake.price} $`}</h6>
            </div>
        </Card>
    );
};
export default CakeCard;