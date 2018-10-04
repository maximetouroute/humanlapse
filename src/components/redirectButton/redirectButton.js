import {withRouter} from 'react-router-dom'
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonToNavigate extends Component {

    render() {

        return (

            <div
                onClick={() => this.props.history.push(this.props.to)}
                key={this.props.name.id}
                className={this.props.className}
                style={this.props.style}
            >{this.props.name}
            </div>
        )
    }
}


ButtonToNavigate.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default withRouter(ButtonToNavigate);