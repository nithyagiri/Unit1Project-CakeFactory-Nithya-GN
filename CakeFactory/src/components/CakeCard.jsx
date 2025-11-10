const CakeCard =({cake}) =>{
    return (
        <Card>
            <img 
                className="cake-card-image"
                src={getImageURL()}
                alt={`Image of ${cake.tilte}`}
                    />
            <div className="cake-card-text">
                <h5>{cake.title}</h5>
                <h6>{cake.availability} </h6>
            </div>
        </Card>
    )
}
export default CakeCard;