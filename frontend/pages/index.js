import DroneState from '../components/DroneState';
import Commands from '../components/commands';

import styled, { createGlobalStyle } from 'styled-components';

const PageStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <PageStyles>
    <h2>JavaScript Drone</h2>
    <Commands />
    <DroneState />
  </PageStyles>
);

export default IndexPage;