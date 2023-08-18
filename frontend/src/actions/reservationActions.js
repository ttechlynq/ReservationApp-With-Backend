import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
})
//Fetch all reservations
export const fetchReservations = () => (dispatch) => {
    axios.get("/reservations")
     .then((response) =>  {
        dispatch({type: "SET_RESERVATIONS", payload: response.data});
    })
    .catch((error) => {
        console.error("There is an error fetching reservations", error)
    });
};

export const makeReservation = (newReservation) => (dispatch) => {
    axios.post("/reservations", newReservation)
     .then((response) => {
        dispatch({type: "ADD_RESERVATION", payload: response.data});
     })
     .catch((error) => {
        console.error("Unable to create reservation", error);
     });
};

export const updateReservation = (id, updatedReservation) => (dispatch) => {
    axios.put(`/reservation/${id}`, updatedReservation)
    .then((response) => {
        dispatch({type: "UPDATE_RESERVATION", payload: response.data});
    })
      .catch((error) => {
        console.error("Error updating reservation", error)
      });
};

export const deleteReservation = (id) => (dispatch) => {
    axios.delete(`/reservations/${id}`)
    .then((response) => {
        dispatch({type: "DELETE_RESERVATION", payload: id});
    })
    .catch((error) => {
        console.error("There's an issue deleting the reservation", error);
    });
};