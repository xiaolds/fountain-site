import React from 'react';

export default function OurTurn() {
    return (
        <div style={styles.container}>
            <p className="page-title-with-txt">This time, it’s our turn</p>
            <p className="title-txt tc">We create very exciting moment with our passion and technology</p>
            <p style={styles.desc} className="fw-6">
                Sometimes we forget the significance of water. That taught us about how we exist.
            </p>
            <p style={styles.desc} className="fw-6">
                Reminds us of the marvels we created. And the impacts that we have made. Water
                surrounds all around us. Shaping the world we live. It’s not just an element that we
                relied on.
            </p>
            <p style={styles.desc} className="fw-6">
                It’s the spirit of perfection and beauty. That has always inspired the
                extraordinary.
            </p>
            <p style={styles.desc} className="fw-6">This time, it’s our turn to make this world beautiful.</p>
        </div>
    );
}

const styles = {
    container: {
        margin: '0 auto',
        padding: '80px 80px 10px'
    },
    desc: {
        color: 'rgba(0,0,0,.6)',
        fontSize: '16px',
        lineHeight: '30px',
        textAlign: 'center'
    }
};
