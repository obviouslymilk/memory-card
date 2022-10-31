import Tilt from 'react-parallax-tilt';

function Card(props) {
    return (
        <Tilt>
            <img src={props.src} alt='Card has not need loaded' />
        </Tilt>
    );
}

export default Card;