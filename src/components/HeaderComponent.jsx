import React, { Component } from 'react';

class HeaderComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            // Initialize state here
        }
    }
    render() {
        return (
            <div>
                <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'> 
                <div><a href='https://javaguides.net' className='navbar-brand'>Employee Management App</a></div>
                </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;