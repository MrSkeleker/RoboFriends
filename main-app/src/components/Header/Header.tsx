import React, { Component } from 'react';

class Header extends Component<any, any> {

    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { title } = this.props;

        return (
            <div>
                <h1 className='f1'>{title}</h1>
            </div>
        )
    }
}

export default Header;