import React from 'react'
import './App.css'

const WordDefinition = () => {

    function DisplayDefinition() {

        console.log("Defintions text placeholder");
        const http = require("https");

        const app_id = "a166eead"; // insert your APP Id
        const app_key = "4d5e6bc35842b052b42bfc19425f3e23"; // insert your APP Key
        const wordId = "ace";
        const fields = "definitions";
        const strictMatch = "false";

        const options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/entries/en-us/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
        method: "GET",
        headers: {
            'app_id': app_id,
            'app_key': app_key
        }
        };

        http.get(options, (resp) => {
            let body = '';
            resp.on('data', (d) => {
                body += d;
            });
            resp.on('end', () => {
                let parsed = JSON.stringify(body);

                console.log(parsed);
            });
        });


    }

    return(

        <div className="sticky-content">
            <p>Display the word definition by clicking the button below!</p>
            <button onClick={DisplayDefinition} className="button-class">Display Definition</button>
        </div>

    );

}

export default WordDefinition