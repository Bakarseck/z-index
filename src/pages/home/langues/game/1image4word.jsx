// QuizComponent.js
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { quizDataState } from '@/states/quizz';
import Layout from '@/components/layout/layoutGame';

const QuizComponent = () => {
    const [quizData, setQuizData] = useRecoilState(quizDataState);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentData = quizData[currentImageIndex];

    const handleOptionSelect = (option) => {
        if (currentImageIndex < quizData.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            
        }
    };

    return (
        <Layout>
            <img src={currentData.imageUrl} alt={`Question ${currentImageIndex + 1}`} />
            <div className="options">
                {currentData.options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionSelect(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </Layout>
    );
};

export default QuizComponent;
