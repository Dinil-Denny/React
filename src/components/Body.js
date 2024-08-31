import { useState, useEffect } from "react";
//import { restaurants } from "../../utils/sampleData";
import ResCards from "./ResCards";
import ShimmerUI from "./Shimmer";


const Body = () => {
    //state variable
    const [restaurantDatas,setRestaurantDatas] = useState([]);

    useEffect(()=>{
        fetchSwiggyData();
    },[])
    const fetchSwiggyData = async ()=>{
        try {
            let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let data = await response.json();
            setRestaurantDatas(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //console.log("data from swiggy: ",data);
        } catch (error) {
            if(error)console.log(error.message);
        }
    }

    //Shimmer UI generating before actual content is loaded
    if(restaurantDatas.length === 0){
        return(
            <ShimmerUI/>
        )
    }

    return(
        <div id='body'>
            <div id='search_box'>Search</div>
            <div id="filter_restaurants">
                <button id="filter_btn" onClick={()=>{
                    let filteredRestaurnats = restaurantDatas.filter((restaurant) => restaurant?.info?.avgRating > 4);
                    setRestaurantDatas(filteredRestaurnats);
                }}>Top rated restaurants</button>
            </div>
            <div id='res_card_container'>
                {
                    restaurantDatas.map(restaurant => (
                        <ResCards key={restaurant.info.id} resDetails={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;