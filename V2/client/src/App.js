import React from 'react';
import DroneState from './components/DroneStates';
import styled, { createGlobalStyle } from 'styled-components';

const PageStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;


const App = () => (
  <PageStyles>
    <h2>JavaScript Drone</h2>
    <DroneState />
  </PageStyles>
);

export default App;

