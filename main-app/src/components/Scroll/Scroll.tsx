import React from 'react';

import styles from './Scroll.module.scss';

function Scroll(props: any) {
    return (
        <div style={{ height: '75vh' }} className={styles.scroll}>
            {props.children}
        </div>
    )
}

export default Scroll;