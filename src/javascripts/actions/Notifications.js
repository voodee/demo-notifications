import {SHOW_NOTIFICATION, REMOVE_NOTIFICATION} from '../constants/Notifications';

export function showNotification(data) {
    return {
        type: SHOW_NOTIFICATION,
        payload: data
    };
}

export function removeNotification(uid) {
    return {
        type: REMOVE_NOTIFICATION,
        uid
    };
}