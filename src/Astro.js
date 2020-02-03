import React from "react"
import "./App.css"


const Astro = () => {

    function AstroData() {

        const https = require('https');

        https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
    
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
    
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            alert(JSON.parse(data).hdurl);
        });
    
        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });

    }

    return(
        <div className="sticky-content">

        <button onClick={AstroData} className="button-class"
        >
        Astro
        </button>
        </div>
    );

}

export default Astro