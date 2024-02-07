// import logo from './logo.svg';
import './App.css';
import Card from "./Components/Card"

function App() {
  // let myObj ={
  //   username:"Ram",
  //   age: 25
  // }

  // let newArry =[1,2,3,4]


  return (
  <>
  <h1 className="bg-blue-400 text-black p-4 rounded-xl">Testing Tailwind</h1>
  <Card userName="Shiya" btntext ="My Details"/>
  <Card userName= "Moni"/>
  </>
  );


}

export default App;
