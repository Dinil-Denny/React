import { RES_SAMPLE_IMG } from "../../utils/links";

const ResCards = (props) => {
    let {resDetails} = props;
    let {name,cuisine,rating} = resDetails;
    return(
        <div className='res_card'>
            <img className='res_card_img' src={RES_SAMPLE_IMG}/>
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <h4>{rating} </h4>
        </div>
    )
}
export default ResCards;