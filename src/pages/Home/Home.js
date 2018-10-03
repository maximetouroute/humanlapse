import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Home.css';
import {homePunchline, photographerName} from './../../content/content';
import PropTypes from 'prop-types';
import {homepageContent} from "./../../content/content";

export class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="mainGrid">
                    <div className="message">
                        <div>
                            <div className="text big">{homepageContent.title}</div>
                            <div className="text small">{homepageContent.subtitle}</div>
                        </div>
                        <Link to={process.env.PUBLIC_URL + '/index'} className="button">GET IN</Link>
                    </div>

                </div>
            </div>
        );
    }
}


Home.propTypes = {
    slideshow: PropTypes.array.isRequired
};