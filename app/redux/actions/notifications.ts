import {NOTIFICATION_ADD_ITEM, NOTIFICATION_REMOVE_ITEM} from 'app/redux/actions';

export const addNotification = (notificationData: any) => ({
    payload: notificationData,
    type: NOTIFICATION_ADD_ITEM,
});

export const removeNotification = (idxNotification: any) => ({
    payload: idxNotification,
    type: NOTIFICATION_REMOVE_ITEM,
});
