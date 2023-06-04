import { CLEAR_ACTION, GENERATE_ACTION, REMOVE_ACTION, TYPE_ERROR, TYPE_INFO, TYPE_SUCCESS, TYPE_WARNING } from "../../constants/AlertsConstants";

export function generate(type, message, headline = 'Alert') {
    return {
        type: GENERATE_ACTION,
        payload: {
            type: type,
            message: message,
            headline: headline
        }
    }
}

export function remove(alert){
    return {
        type: REMOVE_ACTION,
        payload: {
            alert: alert
        }
    }
}

export function clear() {
    return{
        type: CLEAR_ACTION,
        payload: {

        }
    }
}

export function success(message) {
    return generate(
        TYPE_SUCCESS,
        message,
        'Success'
    )
}

export function info(message) {
    return generate(
        TYPE_INFO,
        message,
        'Info'
    )
}

export function warning(message) {
    return generate(
        TYPE_WARNING,
        message,
        'Warning'
    )
}

export function error(message) {
    return generate(
        TYPE_ERROR,
        message,
        'Danger'
    )
}