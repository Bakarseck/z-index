import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            onTimeout();
        }
    }, [seconds, onTimeout]);

    const formatTime = () => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    };

    return (
        <div className="timer">
            Time: {formatTime()}
        </div>
    );
};

export default Timer;
