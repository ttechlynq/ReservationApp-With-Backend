const reservations = [];

const makeReservation = (req, res) => {
    const newReservation = req.body;
    newReservation.id = Date.now();
    reservations.push(newReservation);
    res.status(201).json(newReservation);
};

const getAllReservations = (req, res) => {
    res.json(reservations)
};

const getAllReservationById = (req, res) => {
    const { id } = req.params;
    const reservation = reservations.find((r) => r.id === parseInt(id));
    if (reservation) {
        res.json(reservation);
    } else {
        res.status(404).json({ message: "Reservation does not exist" })
    }
};

const updateReservation = (req, res) => {
    const { id } = req.params;
    const updatedReservation = req.body;
    reservations.forEach((r, index) => {
        if (r.id === parseInt(id)) {
            reservations[index] = { ...r, ...updatedReservation };
        }
    });
    res.json(updatedReservation)
};

const deleteReservation = (req, res) => {
    const { id } = req.params;
    const index = reservations.findIndex((r) => r.id === parseInt(id));
    if (index !== -1){
        reservations.splice(index,1);
        res.json({ message: "Reservation successfully updated" });
    } else {
        res.status(404).json({ message: "The reservation was not found" });
    }
};

module.exports {
    makeReservation,
    getAllReservations,
    getAllReservationById,
    updateReservation,
    deleteReservation,
};