import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-light">A Warm Welcome!</h1>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis illo maxime obcaecati optio deleniti vitae id expedita ad sint ex dolor amet, modi accusantium? Animi vitae expedita nobis explicabo?</p>
                            <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
