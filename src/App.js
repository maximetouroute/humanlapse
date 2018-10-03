import React, { Component } from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import Humanlapse from './pages/Humanlapse/Humanlapse';
import MenuPage from './pages/MenuPage/MenuPage';
import { gallery, slideshow } from './content/content';
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                        <Route path={process.env.PUBLIC_URL + '/humanlapse/:key'} component={Humanlapse}/>
                        <Route path={process.env.PUBLIC_URL + '/index'} component={MenuPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
