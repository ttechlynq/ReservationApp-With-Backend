import React from "react";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import './App.css';

function App() {
  return (
    <div className="App">
        <ReservationForm />
        <ReservationList />
    </div>
  );
}

export default App;