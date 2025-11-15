import Card from'../../common/Card.jsx';
import Spacer from '../../common/Spacer.jsx';
const CakeCard =({cake}) =>{
    const getImageURL = () => {
        return 'https://i.ibb.co/' + cake.imageId;
    }
    return (
        <Card  clickable={true}>
            <img 
                className="cake-card-image"
                src={getImageURL()}
                alt={`Image of ${cake.name} `} // accessability
            />
            <div className="cake-card-text">
                <h5>{cake.name}</h5>
     {/*}           <h6>{cake.description} </h6>
                <h6>{`Price: ${cake.price} $`}</h6> */}
            </div>
            <Spacer marginY="10px"/>
        </Card>
    );
};
export default CakeCard;