import Tilt from 'react-parallax-tilt';
import '../../../styles/Card.css'

function Card(props) {
    return (
        <Tilt>
            <img src={props.src} className="card" alt='Card has not need loaded' onClick={props.onClick} />
        </Tilt>
    );
}

export default Card;