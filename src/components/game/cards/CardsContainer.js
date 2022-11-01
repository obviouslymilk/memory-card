import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function CardsContainer(props) {

    function mapCards() {
        return props.cards.map(card => {
            const uuid = uuidv4();
            return <Card key={ uuid } src={card} onClick={props.onClick} />
        })
    }

    return (<div id="container" style={{"display":"flex", "flexFlow":"row wrap"}}>
        {mapCards()}
    </div>);
}

export default CardsContainer;