import { CLEAR_ACTION, GENERATE_ACTION, REMOVE_ACTION } from "../../constants/AlertsConstants";


const initialState = {
    position: "top-right",
    alerts: [],
    timeout: 0,
};

const generate = (state, payload) => {
    const newAlert ={
        id: (new Date()).getTime(),
        type: payload.type,
        headline: payload.headline,
        message: payload.message
    };

    return{
        ...state,
        alerts: [...state.alerts, newAlert]
    }
};

const remove = (state, paylod) => {
    const alerts = state.alerts;

    const idx = alerts.indexOf(paylod.alert);
    if (idx >= 0) {
        return {
            ...state,
            alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
        }
    }
    return state;
};

const clear = (state, payload) => {
    return {
        state,
        alerts: []
    }
};

export default function alertsReducer(state = initialState, action) {
    switch (action.type) {
        case GENERATE_ACTION:
            return generate(state, action.payload);
        case REMOVE_ACTION:
            return remove(state, action.payload);
        case CLEAR_ACTION:
            return clear(state, action.payload);
        default:
            return state;
    }
}
