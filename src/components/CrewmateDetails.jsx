import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";

function CrewmateDetails() {
  const [crewmate, setCrewmate] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getCrewmate = async (id) => {
    let { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  };

  const deleteCrewmate = async (id) => {
    let { error } = await supabase.from("crewmates").delete().eq("id", id);

    if (error) throw error;
    navigate("/crewmates");
  };

  useEffect(() => {
    getCrewmate(id)
      .then((data) => setCrewmate(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {crewmate && (
        <div>
          <h2>{crewmate.name}</h2>
          <p>{crewmate.description}</p>
          <button onClick={() => deleteCrewmate(crewmate.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default CrewmateDetails;