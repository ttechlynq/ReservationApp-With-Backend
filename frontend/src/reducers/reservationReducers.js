import {
    MAKE_RESERVATION,
    UPDATE_RESERVATION,
    DELETE_RESERVATION,
} from "../actions/reservationActions";

const initialState = {
    reservations: [],
};

const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return{
                ...state,
                reservations: action.payload,
            };
        case MAKE_RESERVATION:
        return {
            ...state,
            reservations: [...state.reservations, action.payload],
        };

        case UPDATE_RESERVATION:
            return {
              ...state,
              reservations: state.reservations.map((reservation) =>
                reservation.id === action.payload.id ? action.payload : reservation
                ),
            };

        case DELETE_RESERVATION:
                return {
                    ...state,
                    reservations: state.reservations.filter(
                        (reservation) => reservation.id !== action.payload
                    ),
                };
          default:
            return state;
    }
};

export default reservationReducer;