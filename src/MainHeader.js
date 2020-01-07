import React from 'react'
import './index.css'


class MainHeader extends React.Component {

    render() {

        return(
            <header className="app-header"><h1>Word of the Day</h1>
               {/* <div className="timer-container"><span>15:00</span></div> */}
            </header>
        )
    }
}

// ReactDOM.render(MainHeader, document.getElementById('header'));

export default MainHeader