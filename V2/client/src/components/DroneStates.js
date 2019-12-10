import React, { useState, useEffect } from 'react';
import Battery from './Battery';

function DroneState() {
  const [hasError, setErrors] = useState(false);
  const [droneState, updateDroneState] = useState({
    data: null,
    pending: false,
    completed: false,
    error: false,
  });

  async function fetchData() {
    const res = await fetch("http://localhost:9000/api");
    res
    .json()
      .then(res => updateDroneState(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [] )

  return (
    <div>
      <span>{JSON.stringify(droneState)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default DroneState;