
import './App.css';
import { Header } from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import { Notifications } from './Notifications';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
