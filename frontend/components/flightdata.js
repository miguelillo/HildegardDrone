import styled from 'styled-components';

const SpeedStyles = styled.div`width: 100%;`;


const FlightData = props => (
    <SpeedStyles speed={props.speed}>
        <span className="flightData">{props.speed}</span>
    </SpeedStyles>
)


FlightData.defaultProps = {
    speed: 60
};


export default FlightData;