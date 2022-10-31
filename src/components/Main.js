import React from "react";
import Cards from '../utils/cards';
import Scoreboard from "./game/scoreboard/Scoreboard";
import CardsContainer from './game/cards/CardsContainer';

function Main() {   
    /**
     * Generate and array of random cardbacks.
     * @param {number} amount Amount of cards in array
     * @returns array of random cardbacks
     */
    // const getRandomCards = amount => {
    //     const copy = Cards.sort(() => Math.random() - 0.5);
    //     return copy.slice(0, amount);
    // }

    return (<main>
        <Scoreboard />
    </main>);
}

export default Main;