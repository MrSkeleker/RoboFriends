import React, { Component } from 'react';

import styles from './Header.module.scss';

class Header extends Component<any, any> {

    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { title } = this.props;

        return (
            <div>
                <h1 className={`f1 ${styles.title}`}>{title}</h1>
            </div>
        )
    }
}

export default Header;