import { useState, useEffect } from "react";
//import { restaurants } from "../../utils/sampleData";
import ResCards from "./ResCards";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //state variable
    const [restaurantDatas,setRestaurantDatas] = useState([]);
    const [searchText,setSearchText] = useState("");
    //state variable to hold the searched and filtered restaurants
    const [filteredRes,setFilteredRes] = useState([]);

    useEffect(()=>{
        fetchSwiggyData();
    },[])
    const fetchSwiggyData = async ()=>{
        try {
            let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let data = await response.json();
            setRestaurantDatas(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //filteredRes state variable also holding full restaurant data
            setFilteredRes(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            if(error)console.log(error.message);
        }
    }

    //Shimmer UI rendering before actual content is loaded
    //conditional rendering
    if(restaurantDatas.length === 0){
        return(
            <ShimmerUI/>
        )
    }

    return(
        <div id='body'>
            {/* search box */}
            <div id='search_box'>
                <input type="text" placeholder="search....." className="search_input" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="search_btn" onClick={()=>{
                    //here we convert the restaurant name form restaurantDatas array and searchText from the search input box to lowercase to make the search case insesitive.
                    //here we don't use any database so this is how we can solve the case sensitivity issues.
                    let searchRes = restaurantDatas.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRes(searchRes);
                }}>Search</button>
            </div>

            {/* filtering top restaurants */}
            <div id="filter_restaurants">
                <button id="filter_btn" onClick={()=>{
                    let filteredRestaurnats = restaurantDatas.filter((restaurant) => restaurant?.info?.avgRating >= 4.5);
                    setFilteredRes(filteredRestaurnats);
                }}>Top rated restaurants</button>
            </div>
            
            {/* displaying each restaurant cards */}
            <div id='res_card_container'>
                {
                    filteredRes.map(restaurant => (
                        <Link to = {"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="nav_menu">
                            <ResCards resDetails={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;