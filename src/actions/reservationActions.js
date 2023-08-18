//Action types
export const MAKE_RESERVATION = "MAKE_RESERVATION";
export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";

//Action creators
export const makeReservation = (reservation) => ({
    type: MAKE_RESERVATION,
    payload: reservation,
});

export const updateReservation = (id, updatedReservation) => ({
    type: UPDATE_RESERVATION,
    payload: {id, updatedReservation },
});

export const deleteReservation = (id) => ({
    type: DELETE_RESERVATION,
    payload: id,
})


