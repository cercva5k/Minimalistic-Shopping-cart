import './App.css';
import Navbar from './layouts/navbar';
import { Fragment } from 'react';
import Routes from './route/index';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes/>
      </div>
    </Fragment>
  );
}

export default App;
