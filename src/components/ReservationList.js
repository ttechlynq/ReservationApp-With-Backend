import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { connect } from "react-redux";
import { deleteReservation,updateReservation } from "../actions/reservationActions";

const ReservationList = () => {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => state.reservations.reservations);
    const [editedReservation, setEditedReservation] = useState({})

    const handleDelete = (id) => {
        dispatch(deleteReservation(id));
    };

    const handleEdit = (reservation) => {
        setEditedReservation({...reservation});
    };

    const handleSave = () => {
//        if (editedReservation !== null && editedReservation.name) {
           if (
      editedReservation &&
      editedReservation.id &&
      editedReservation.name &&
      editedReservation.date &&
      editedReservation.time &&
      editedReservation.partySize
           ) {
            dispatch(updateReservation(editedReservation.id, editedReservation));
            setEditedReservation(null);
        }
    };

    return (
        <div className="reservation-list">
            <h2>Reservations</h2>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        {editedReservation !== null && editedReservation.id === reservation.id ? (
                            <div>
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
                                <input
                                    type="date"
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
                        <div>{reservation.name}</div>
                        <div>{reservation.date}</div>
                        <div>{reservation.time}</div>
                        <div>Party Size: {reservation.partySize}</div>
                        <button onClick={() => handleEdit(reservation)}>Edit</button>
                        <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;

//    const mapStateToProps = (state) => {
//        return {
//            reservations: state.reservations.reservations,
//        };
//    };
//
//export default connect(mapStateToProps)(ReservationList);