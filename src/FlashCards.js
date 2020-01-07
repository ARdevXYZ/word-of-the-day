import React from 'react'
import Text from './Text'


const FlashCards = () => {

    function initFlashCards() {
        console.log("Coming Soon!");
    }

    return(
        <div className="sticky-content">
            <Text />
            <button onClick={initFlashCards} className="button-class"
            >
            Flash Cards!
            </button>
        </div>
    );

}

export default FlashCards