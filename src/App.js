import logo from './logo.svg';
import './App.css';
import OrderDetailsScreen from './screens/orderDetails';
import { Header } from './components';

function App() {
  return (
    <div className="App">
    <Header />
    <OrderDetailsScreen />
    </div>
  );
}

export default App;
