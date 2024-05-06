// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import CustomerAdd from './CustomerAdd';
import { store } from './store';
import CustomerView from './CustomerView';

function App() {
  return (
    //Provider to get the store data and providing to components.
    <Provider store={store}>
      <div className="App">
        <CustomerAdd/>
        <CustomerView/>
      </div>
    </Provider>

  );
}

export default App;
