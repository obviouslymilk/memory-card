import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function CardsContainer(props) {

    function mapCards() {
        return props.cards.map(card => {
            return <Card key={ uuidv4() } src={card} />
        })
    }

    return (<div id="container">
        {mapCards()}
    </div>);
}

export default CardsContainer;