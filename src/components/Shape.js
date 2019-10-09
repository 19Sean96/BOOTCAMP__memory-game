import React from "react";
import './styles/Shape.css';

const Shape = props => {
    const shapeStyle = {
        clipPath: props.path,
        backgroundColor: props.colorHex
    }
    return (
        <div>
            <div className="wrapper">
                <div className="shape" style={shapeStyle} onClick={() => {
                    props.rearrange();
                    props.checkShape(props.type);
                }}></div>
            </div>
        </div>
    );
};

export default Shape;
