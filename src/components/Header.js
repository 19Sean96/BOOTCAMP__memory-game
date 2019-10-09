import React from "react";
import "./styles/Header.css";

function Header(props) {
    return (
        <div>
            <header>
                <h3><span className="italic">Reactive</span> Shapes</h3>
                <div className="scores">
                    <p>
                        Current Score: <span className="currentScore">{props.currentScore}</span>
                    </p>
                    <p>
                        High Score: <span className="highScore">{props.highScore}</span>
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Header;
