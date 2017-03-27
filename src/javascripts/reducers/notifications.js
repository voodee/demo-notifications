import {SHOW_NOTIFICATION, REMOVE_NOTIFICATION} from '../constants/Notifications';
import { defaultValue } from 'react-notification/src/Constants';
import { List, Map } from 'immutable'

export default function Notifications(state = new Map(), action = {}) {
    switch(action.type) {
        case SHOW_NOTIFICATION:

            const _notification = defaultValue
                .merge( Map(action.payload) )
                .merge( Map({uid: state.size}));

            return state.set(state.size, _notification);

        case REMOVE_NOTIFICATION:
            return state.filter(notification =>
                notification.get('uid') !== action.uid
            )
    }

    return state;
}