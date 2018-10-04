import React, {Component} from 'react';
import './menuPage.css';
import {homepageContent, contentPages} from "../../content/content";
import Menu from '../../components/menu/menu';


export default class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: contentPages
        };
    }

    getKeyForName(name) {
        const keys = Object.keys(this.state.gallery);
        for (let i = 0; i < keys.length; i++) {
            if (this.state.gallery[keys[i]].name === name) {
                return keys[i];
            }
        }
        return undefined;
    }

    buttonClickedForName(name) {
        this.props.history.push(process.env.PUBLIC_URL +'/content/' + this.getKeyForName(name))
    }


    render() {
        const names = Object.keys(this.state.gallery).map(key => this.state.gallery[key].name);

        return (
            <div className="menuPage">
                <div className="message">
                    <div className="text big">{homepageContent.title}</div>
                    <div className="text small">{homepageContent.subtitle}</div>
                </div>

                <Menu collections={names} onMenuClick={(name) => {
                    this.buttonClickedForName(name)
                }}/>
            </div>
        );
    }
}
