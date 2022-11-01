import React, { useEffect, useState } from "react";
import Cards from '../utils/cards';
import Scoreboard from "./game/scoreboard/Scoreboard";
import CardsContainer from './game/cards/CardsContainer';

function Main() {   
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState(getRandomCards(8));
    const [rememberedCards, setRememberedCards] = useState([]);

    function getRandomCards(amount) {
        const copy = Cards.sort(() => Math.random() - 0.5);
        return copy.slice(0, amount);
    }

    useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore);
        }
    }, [currentScore, highScore])

    const handleCardSelect = e => {
        const id = e.target.src;
        if (rememberedCards.indexOf(id) === -1) {
            setRememberedCards([...rememberedCards, id]);
            setCurrentScore(currentScore + 1);
            setCards(getRandomCards(8));
        } else {
            setRememberedCards([]);
            setCurrentScore(0);
            setCards(getRandomCards(8));
        }
    } 

    return (<main id="Main">
        <Scoreboard current={currentScore} high={highScore} />
        <CardsContainer cards={cards} onClick={handleCardSelect} />
    </main>);
}

export default Main;