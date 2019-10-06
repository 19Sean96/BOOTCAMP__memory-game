import React from "react";
import "./styles/Header.css";

function Header(props) {
    return (
        <div>
            <header>
                <h3>Memory Game!</h3>
                <div className="scores">
                    <p>
                        Current Score: <span className="currentScore">{props.currentScore}</span>
                    </p>
                    <p>
                        High Score: <span className="highScore">{props.highScore}</span>
                    </p>
                </div>
                <button onClick={props.onClick}>This is a button</button>
            </header>
        </div>
    );
}

export default Header;
