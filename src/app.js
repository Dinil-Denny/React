import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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