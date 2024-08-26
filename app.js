import ReactDOM from 'react-dom/client';

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
const ResCards = () => {
    return(
        <div className='res_card'>
            <img className='res_card_img' src='https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'/>
            <h3>Restaurant Name</h3>
            <p>North Indian,Chines,South Indian</p>
            <h4>Rating </h4>
        </div>
    )
}
const Body = () => {
    return(
        <div id='body'>
            <div id='search_box'>Search</div>
            <div id='res_card_container'>
                <ResCards/>
                <ResCards/>
                <ResCards/>
                <ResCards/>
                <ResCards/>
                <ResCards/>
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