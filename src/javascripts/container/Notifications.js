import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
// import ReactNotification from 'react-notification';
import ReactNotification from '../../../../npm/react-notification/dist/react-notification';

import { removeNotification } from '../actions/Notifications';


class ReduxNotification extends Component {

    componentWillReceiveProps(nextProps) {
        this.props.notifications.keySeq().map( uid =>
            ! nextProps.notifications.get( uid ) && this._reactNotification.remove( uid )
        );

        nextProps.notifications.map( (notification, uid) => {
            if ( ! this.props.notifications.get( uid ) ) {
                this._reactNotification.add({
                    ...notification.toJS(),
                    onRemove: () => {
                        this.props.dispatch( removeNotification( uid ) );
                        notification.onRemove && notification.onRemove()
                    }
                })
            }
        });
    }


    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps
    }


    _setReactNotification = notification => {
        this._reactNotification = notification
    };


    render() {
        const {notifications, ...rest} = this.props;

        return (
            <ReactNotification ref={this._setReactNotification} { ...rest } />
        )
    }
}


const mapStateToProps = (state) => {
    const { notifications } = state;

    return {
        notifications
    }
};


export default connect(mapStateToProps)(ReduxNotification)