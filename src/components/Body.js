import restaurantData from "../../utils/sampleData";
import ResCards from "./ResCards";

const Body = () => {
    return(
        <div id='body'>
            <div id='search_box'>Search</div>
            <div id='res_card_container'>
                {
                    restaurantData.map(restaurant => (
                        <ResCards key={restaurant.id} resDetails={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;