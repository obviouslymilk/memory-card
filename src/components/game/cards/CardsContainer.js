import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/CardsContainer.css';

function CardsContainer(props) {

    function mapCards() {
        return props.cards.map(card => {
            const uuid = uuidv4();
            return <Card key={ uuid } src={card} onClick={props.onClick} />
        })
    }

    return (<div id="container">
        {mapCards()}
    </div>);
}

export default CardsContainer;