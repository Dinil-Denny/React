import ReactDOM from 'react-dom/client';
const Description = () => (
    <p id='description'>This tutorial teach React</p>
);
const Heading = () => (
    <div>
        <h1 id='heading'>Hello React</h1>
        <Description/>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Heading/>);