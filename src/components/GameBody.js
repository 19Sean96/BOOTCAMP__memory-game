import React from "react";
import "./styles/GameBody.css";
import Shape from "./Shape";

function GameBody(props) {
    return (
        <div>
            <main className="game">
                <div className="container">
                    {props.shapes.map((shape,index) => (
                        <Shape 
                            path={shape.path}
                            type={shape.type}
                            colorHex={props.colors[index].color}
                            rearrange={props.rearrange}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default GameBody;
