import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer title={"Bienvenidos a mi Tienda!"} />
      <CardList/>
    </div>
  );
}

export default App;
