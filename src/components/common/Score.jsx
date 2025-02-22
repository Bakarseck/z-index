import { scoreState } from '@/states/crossword';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Score = () => {
    const score = useRecoilValue(scoreState);
    return (
        <div className="score">
            Score: {score}
        </div>
    );
};

export default Score;