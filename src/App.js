
import './App.css';
import Mydata from './components/mydata';
import Header from './components/Header/header';
import { Provider } from 'react-redux';
import store  from './Redux/store';
function App() {
  return (
    <div className="App">
   <Provider store={store}>
<Header/>
</Provider>
    </div>
  );
}
 
export default App;
