import styled from 'styled-components';

const CameraStyles = styled.div`
  width: 100%;`;


debugger;

const Camera = props => (
    <CameraStyles level={props.battery}>
        <span className="cameraImage">{props.battery}%</span>
    </CameraStyles>
);

export default Camera;