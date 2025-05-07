import React from 'react';

const Avatar = ({ letter, size }) => {
    const style = size === 'large' ? { width: '36px', height: '36px', fontSize: '18px' } : {};
    return (
        <div className="avatar" style={style}>
            {letter}
        </div>
    );
};

export default Avatar;