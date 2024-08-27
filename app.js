import ReactDOM from 'react-dom/client';

const restaurantData = [
    {id:1,name:"Paragon",cuisine:"Indian",rating:4.5},
    {id:2,name:"MayFlower",cuisine:"Indian",rating:4},
    {id:3,name:"Rahmath",cuisine:"Indian",rating:4},
    {id:4,name:"Sufi",cuisine:"Arabian",rating:4.5},
    {id:5,name:"Chines Hut",cuisine:"Chines",rating:3},
    {id:6,name:"Pizza Hut",cuisine:"Italian",rating:3.5}
]

const Header = ()=>{
    return (
        <div id='header'>
            <div> 
                <img alt='logo' id='logo' src='https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg'/>
            </div>
            <div id='nav_links'>
                <ul id='menu_list'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const ResCards = (props) => {
    let {resDetails} = props;
    let {name,cuisine,rating} = resDetails;
    return(
        <div className='res_card'>
            <img className='res_card_img' src='https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'/>
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <h4>{rating} </h4>
        </div>
    )
}
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

const MainContainer = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<MainContainer/>);