import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardList/>
    </div>
  );
}

export default App;
