import React, { Component } from 'react'
import "./styles/Jumbotron.css"

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h4>Click on a shape to earn points, but don't click on any more than once!</h4>
                </section>
            </div>
        )
    }
}

export default Jumbotron
