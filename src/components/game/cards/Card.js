import Tilt from 'react-parallax-tilt';

function Card(props) {
    return (
        <Tilt glareEnable={true} glareMaxOpacity={0.5}>
            <img src={props.src} alt='Card has not need loaded' onClick={props.onClick} />
        </Tilt>
    );
}

export default Card;