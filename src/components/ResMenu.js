import { useEffect, useState } from "react";
import Error from "./Error";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const[resDetails,setResDetails] = useState(null);

    //useParams() return an object with the url parameters. Here it will return the url parameter 'id' as object from the url in which this component is rendered
    //we directly extract the id from the returned object from the useParams() hook. 
    let {id} = useParams();

    const fetchResMenu = async ()=>{
        try{
            let reponse = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            let data = await reponse.json();
            setResDetails(data.data);
        }catch(err){
            <Error/>
        }
    }

    useEffect(()=>{
        fetchResMenu();
    },[]);

    //when there is no data in resDetails state variable load the shimmer UI
    if(resDetails===null) return <ShimmerUI/>
    //extracting only cards parameter from the whole data received from API which is stored in resDetails
    const {cards} = resDetails;
    return(
        <div className="restaurant_menu">
            <div id="res_name">
                <h1>{cards[0].card.card.text}</h1>
            </div>
            <div id="res_menu">
                <h3>{cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title}</h3>
                <ul>
                    {cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
                    .map(item =>
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ResMenu;