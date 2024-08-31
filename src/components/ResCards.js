
const ResCards = (props) => {
    let {resDetails} = props;
    return(
        <div className='res_card'>
            <img className='res_card_img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resDetails?.info?.cloudinaryImageId}/>
            <h3 className="resName">{resDetails?.info?.name}</h3>
            <h5 className="resLocality">{resDetails?.info?.locality}</h5>
            {/* cuisine is written in an array, to comma seperate it we use array.join() method*/}
            <p className="resCuisines">{resDetails?.info?.cuisines.join(',')}</p>
            <p className="resRating">Rating : {resDetails?.info?.avgRating}</p>
        </div>
    )
}
export default ResCards;