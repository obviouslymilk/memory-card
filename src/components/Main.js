import React, { useState } from "react";
import Cards from '../utils/cards';

function Main() {   
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    /**
     * Generate and array of random cardbacks.
     * @param {number} amount Amount of cards in array
     * @returns array of random cardbacks
     */
    const getCardbacks = amount => {
        const copy = Cards.sort(() => Math.random() - 0.5);
        return copy.slice(0, amount);
    }

    return (<main>
    </main>);
}

export default Main;