import React, { Component } from 'react'
import {List, Map, fromJS} from 'immutable'
import CSSModules from 'react-css-modules'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as constants from 'constants/Notification'

import NotificationItem from './Item'

import styles from './styles.sass'

@CSSModules(styles, {allowMultiple: true})
export default class Notification extends Component {

    constructor(props) {
        super(props);

        this.uid = 0;
        this.state = {
            notifications: List()
        }
    }


    add( notification ) {
        const _notification = constants.DEFAULT_NOTIFICATION
            .merge( Map(notification) )
            .merge( Map({uid: ++this.uid}));

        // validation position
        if ( !constants.POSITIONS.includes( _notification.get('position') )) {
            throw new Error(`notification position "${ _notification.get('position') }" unsupported`)
        }

        // validation level
        if ( !constants.LEVELS.get( _notification.get('level') )) {
            throw new Error('notification level unsupported')
        }

        const notifications = this.state.notifications.push(_notification);
        this.setState({notifications})
    }

    _removeItem = (uid) => {
        this.setState({
            notifications: this.state.notifications.filter(notification => notification.get('uid') !== uid)
        })
    };


    render() {

        // if ( ! this.state.notifications.size ) return null;

        // Group by position
        const notifications = constants.POSITIONS.valueSeq().map( position => {
            const _notifications = this.state.notifications.filter( notification => position === notification.get('position'));

            if ( !_notifications.size ) return null;

            return (
                <div styleName={`notifications notifications--position-${position}`} key={position}>
                    { _notifications.map( notification =>
                        <NotificationItem
                            key             = {notification.get('uid')}
                            notification    = {notification}
                            onRemove        = {this._removeItem.bind(this, notification.get('uid'))}
                        />
                    )}
                </div>
            );
        });


        return (
            <div>
                {notifications}
            </div>
        )
    }

}