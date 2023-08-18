import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../actions/reservationActions";

const ReservationForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        partySize: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            ...formData,
            id: Date.now(),
        }



        dispatch(makeReservation(newReservation));
        setFormData({
            name: "",
            date: "",
            time: "",
            partySize: 1,
        });
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            />
        <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            />
        <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            />

        <input
            type="number"
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            min="1"
            required
            />
        <button type="submit">Make Reservation</button>
        </form>
    );
};

export default ReservationForm;