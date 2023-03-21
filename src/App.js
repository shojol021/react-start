import logo from './logo.svg';
import './App.css';

const obj = {
  Name:'Abdul',
  Phone: 'Xiaomi',
  Price: 20000
}

const myStyle = {backgroundColor: 'white'}

function App() {
  
  
  return (
    <div className="App">
      <h1>{obj.Name}</h1>
      <h2>{obj.Phone}</h2>
      <h3>{obj.Price}</h3>
      <MyName name="Shojol" age="31" ></MyName>
      <MyName name="Adnan" age="30" ></MyName>
      <MyName name="Rahul" age="40" ></MyName>
    </div>
  );
}

function MyName(props) {
  const ageAbir = 100;
  return (
    <div className='person'>
      
      <p>My name is: {props.name}</p>
      <p>My age is: {props.age}</p>
      <p style={{backgroundColor: 'yellow', border: '2px solid white' }}>Abir is: {ageAbir}</p>
    </div>
  )
}

export default App;
