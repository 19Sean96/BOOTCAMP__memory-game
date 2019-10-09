import React from "react";
import "./styles/GameBody.css";
import Shape from "./Shape";

function GameBody(props) {
    let shapesClicked = props.shapesClicked;
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
                            key={index}
                            checkShape={shape => {
                                let newShape = shapesClicked.includes(shape) ? function() {
                                    props.resetScore();
                                } : function() {
                                    shapesClicked.push(shape);
                                };
                                newShape();

                            }}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default GameBody;
