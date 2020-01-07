import React from 'react'
import './index.css'

function theTimerFunction() {
    let timeleft = 1500;
    let downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
    }
    }, 1000);
} theTimerFunction();

class MainFooter extends React.Component {

    

    render() {

        return(
            
            <footer className="app-footer">
               <div className="timer-container"><span id="countdown">15:00</span></div>
            </footer>
        )
    }
}

// ReactDOM.render(MainHeader, document.getElementById('header'));

export default MainFooter