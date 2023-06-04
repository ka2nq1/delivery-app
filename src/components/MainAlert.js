import React, { useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import { useDispatch, useSelector } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { remove } from '../store/actions/alertActions';


const MainAlert = () => {
    const { alerts } = useSelector(store => store.alert)
    const dispatch = useDispatch()

    const createNotification = (alert) => {
        const { type, message } = alert;
        switch (type) {
            case 'info':
                NotificationManager.info(message, '', 5000);
                break;
            case 'success':
                NotificationManager.success(message, '', 5000);
                break;
            case 'warning':
                NotificationManager.warning(message, '', 5000);
                break;
            case 'error':
                NotificationManager.error(message, '', 5000);
                break;
            default:
                return
        };
    }

    useEffect(e => {
        if (alerts.length > 0) {
            createNotification(alerts[0]);
            dispatch(remove(alerts[0]));
        }
    }, [alerts, dispatch])

    return (
        <>
            <NotificationContainer />
        </>
    );
}

export default MainAlert;