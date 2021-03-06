import React, {Component} from 'react';
import './menu.css';
import PropTypes from 'prop-types';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(name) {
        if (typeof this.props.onMenuClick === "function") {
            this.props.onMenuClick(name);
        }
    }

    menuItems() {

        const menuItems = [];
        for (let i = 0; i < this.props.collections.length; i++) {
            const collectionName = this.props.collections[i];
            menuItems.push(
                (<div className={`item`} key={collectionName} onClick={() => this.onMenuClick(collectionName)}>
                    <div>{collectionName}</div>
                </div>)
            );

        }
        return (
            <div className="menuGrid">
                {menuItems}
            </div>);
    }

    render() {
        return (
            <div className="menu">
                <div className="gridWrapper">
                    <div className="gridMiddleCentered">
                        {this.menuItems()}
                    </div>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    collections: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func
};

Menu.defaultProps = {
    collections: ['configure', 'your', 'menu', 'items']
};
