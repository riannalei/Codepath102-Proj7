import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CrewmateList from "./components/CrewmateList";
import CrewmateDetails from "./components/CrewmateDetails";
import AddCrewmateForm from "./components/AddCrewmateForm";
import { supabase } from "./services/supabaseClient";
import "./App.css";

function App() {
  const [crewmates, setCrewmates] = useState([]);

  const refreshCrewmates = async () => {
    let { data, error } = await supabase.from("Crewmates").select("*");
    if (error) {
      console.error("Error fetching crewmates:", error);
    } else {
      setCrewmates(data);
    }
  };

  const handleCrewmateCreate = (newCrewmate) => {
    setCrewmates([...crewmates, newCrewmate]);
  };

  useEffect(() => {
    refreshCrewmates();
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the crewmates app! fetch some wonderful crewmates.
            </div>
          }
        />
        <Route
          path="/crewmates"
          element={
            <CrewmateList
              crewmates={crewmates}
              refreshCrewmates={refreshCrewmates}
            />
          }
        />
        <Route
          path="/add-crewmate"
          element={<AddCrewmateForm onCrewmateCreate={handleCrewmateCreate} />}
        />
        <Route path="/crewmate/:id" element={<CrewmateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;