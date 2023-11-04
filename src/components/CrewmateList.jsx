import React, { useEffect, useState } from "react";
import CrewmateListItem from "./CrewmateListItem";
import { supabase } from "../services/supabaseClient";

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([]);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from("Crewmates").select("*");
    if (error) {
      alert("Error fetching crewmates:", error.message);
    } else {
      setCrewmates(data);
    }
  };

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const handleCrewmateDelete = async (id) => {
    const { error } = await supabase.from("Crewmates").delete().match({ id });
    if (error) {
      alert("Error deleting crewmate:", error.message);
    } else {
      setCrewmates(crewmates.filter((crewmate) => crewmate.id !== id));
    }
  };

  const handleCrewmateUpdate = async (updatedCrewmate) => {
    const { error } = await supabase
      .from("Crewmates")
      .update(updatedCrewmate)
      .match({ id: updatedCrewmate.id });
    if (error) {
      alert("Error updating crewmate:", error.message);
    } else {
      setCrewmates(
        crewmates.map((cm) =>
          cm.id === updatedCrewmate.id ? updatedCrewmate : cm
        )
      );
    }
  };

  return (
    <div>
      {crewmates.map((crewmate) => (
        <CrewmateListItem
          key={crewmate.id}
          crewmate={crewmate}
          onDelete={handleCrewmateDelete}
          onUpdate={handleCrewmateUpdate}
        />
      ))}
    </div>
  );
};

export default CrewmateList;