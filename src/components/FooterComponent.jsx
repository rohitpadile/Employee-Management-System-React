import React, { Component } from 'react';

class FooterComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            // Initialize state here
        }
    }
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>All Right reserved 2024 @RohitPadile</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;