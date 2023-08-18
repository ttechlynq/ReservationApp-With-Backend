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
        case MAKE_RESERVATION:
        return {
            ...state,
            reservations: [...state.reservations, action.payload],
        };

        case UPDATE_RESERVATION:
            const updatedReservations = state.reservations.map((reservation) =>
                reservation.id === action.payload.id ? action.payload.updatedReservation : reservation
            );
            return {
              ...state,
              reservations: updatedReservations,
            };

        case DELETE_RESERVATION:
              const filteredReservations = state.reservations.filter(
                (reservation) => reservation.id !== action.payload
              );
                return {
                    ...state,
                    reservations: filteredReservations,
                };

//        case DELETE_RESERVATION:
//              const updatedReservations = state.reservations.filter(
//                (reservation) => reservation.id !== action.payload
//              );
//                return {
//                    ...state,
//                    reservations: updatedReservations,
//                };

          default:
            return state;
    }
};

export default reservationReducer;