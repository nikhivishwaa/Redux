import './App.css';
import Bank from './componetns/Bank';
import Navbar from './componetns/Navbar';

function App() {
  return (
    <>
    <Navbar amount={10000}/>
    <Bank/>
    </>
  );
}

export default App;
