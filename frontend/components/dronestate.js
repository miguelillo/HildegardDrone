import { useState, useEffect } from 'react';
import Battery from './battery';
import Camera from './camera';
import FlightData from './flightdata';
import socket from '../socket';
import styled from 'styled-components';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
}

function useDroneStreaming() {
  const [droneStreaming, updateDroneState] = useState({});
  debugger;
  useEffect(() => {
    socket.on('dronestream', updateDroneState);
    return () => socket.removeListener('dronestream');
  }, []);
  return droneStreaming;
}


const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .status {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const DroneState = () => {
  debugger;
  const status = useSocket();
  const droneState = useDroneState([]);
  const droneStreaming = useDroneStreaming();

  return (
    <DroneStateStyles>
      <p className="status">Status: {status}</p>
      <Battery battery={droneState.bat} />
      <FlightData speed={droneState.yaw} />
      <Camera image={droneStreaming} />
    </DroneStateStyles>
  );
};


export default DroneState;