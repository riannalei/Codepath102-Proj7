import React, { useState } from "react";
import { Link } from "react-router-dom";

const CrewmateListItem = ({ crewmate, onDelete, onUpdate }) => {
  const { id, name, speed, color } = crewmate;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedSpeed, setEditedSpeed] = useState(speed);
  const [editedColor, setEditedColor] = useState(color);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this crewmate?")) {
      onDelete(id);
    }
  };

  const handleUpdate = () => {
    onUpdate({
      ...crewmate,
      name: editedName,
      speed: editedSpeed,
      color: editedColor,
    });
    setIsEditing(false);
  };

  return (
    <div className="crewmate-list-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedSpeed}
            onChange={(e) => setEditedSpeed(e.target.value)}
          />
          <input
            type="text"
            value={editedColor}
            onChange={(e) => setEditedColor(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>
            <Link to={`/crewmate/${id}`}>{name}</Link>
          </h3>
          <p>Speed: {speed}</p>
          <p>Color: {color}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default CrewmateListItem;