const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const reservationRoutes = require("./routes/reservations");
app.use("/api", reservationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});