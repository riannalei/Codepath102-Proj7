import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";

const AddCrewmateForm = ({ onCrewmateCreate }) => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Crewmates")
      .insert([{ name, speed, color }]);

    if (error) {
      alert(`Error creating crewmate: ${error.message}`);
    } else if (data && data.length > 0) {
      // Make sure data is not null and has at least one item
      onCrewmateCreate(data[0]);
      setName("");
      setSpeed("");
      setColor("");
    } else {
      // Handle the case where data is null or empty
      alert("Crewmate was created, but no data was returned.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-crewmate-form">
      <input
        type="text"
        placeholder="Crewmate Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Speed"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Crewmate</button>
    </form>
  );
};

export default AddCrewmateForm;