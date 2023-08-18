import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./ReservationList.css";
import { deleteReservation,updateReservation } from "../actions/reservationActions";

const ReservationList = () => {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => state.reservations.reservations);

    const [editedReservation, setEditedReservation] = useState({})

    useEffect(() => {

            axios.get('http://localhost:5000/api/reservations')
            .then((response) => {
                setReservations(response.data);
            })
            .catch((error) => {
                console.error("There's an error trying to find reservations", error);
            });
    },[]);

    const handleDelete = (id) => {
        axios
        .delete(`http://localhost:5000/api/reservations/${id}`)
        .then((response) => {
            console.log("The reservation has been deleted", response.data);
            setReservations(reservations.filter((reservation) => reservation.id !== id));
        })
        .catch((error) => {
            console.error("There's an issue deleting reservation", error);
        });
    };


    const handleEdit = (reservation) => {
        setEditedReservation({...reservation});
    };

    const handleSave = () => {
        axios
            .put(`http://localhost:5000/api/reservations/${editedReservation.id}`, editedReservation)
            .then((response) => {
             console.log("Reservation has been updated", response.data);
             setEditedReservation({});
             setReservations(
                reservations.map((reservation) =>
                    reservation.id === editedReservation.id ? response.data : reservation
                )
             );
            })
            .catch((error) => {
                console.error("There's an error updating the reservation", error)
            });
    };

    return (
        <div className="reservation-list">
            {reservations.map((reservation) => (
                <div className="reservation-item" key={reservation.id}>
                <div>{reservation.name}</div>
                <div>{reservation.date}</div>
                <div>{reservation.time}</div>
                <div>Party Size: {reservation.partySize}</div>
                {editedReservation.id === reservation.id ? (
                    <div className="edit-form">
                        <input
                        type="text"
                        value={editedReservation.name}
                        onChange={(e) =>
                            setEditedReservation({
                                ...editedReservation,
                                name: e.target.value,
                            })
                        }
                        />
                        <input,
                            type="date",
                            value={editedReservation.date}
                            onChange={(e) =>
                                setEditedReservation({
                                    ...editedReservation,
                                    date: e.target.value,
                                })
                            }
                           />
                        <input
                            type="time"
                            value={editedReservation.time}
                            onChange={(e) =>
                                setEditedReservation({
                                    ...editedReservation,
                                    time: e.target.value,
                                })
                            }
                            />
                        <input
                            type="number"
                            value={editedReservation.partySize}
                            onChange={(e) =>
                                setEditedReservation({
                                    ...editedReservation,
                                    partySize: parseInt(e.target.value),
                                })
                            }
                            />
                            <button onClick={handleSave}>Save</button>
                    </div>
                    ) : (
                    <div>
                        <button onClick={() => handleEdit(reservation)}>Edit</button>
                        <button onClick={() => handleDelete(reservation)}>Delete</button>
                    </div>
                )}
                </div>
            ))}

        </div>
    );
};

export default ReservationList;

