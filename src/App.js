import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/home/homePage';
import ContentPage from './pages/content/contentPage';
import MenuPage from './pages/menu/menuPage';
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
                        <Route path={process.env.PUBLIC_URL + '/content/:key'} component={ContentPage}/>
                        <Route path={process.env.PUBLIC_URL + '/index'} component={MenuPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
