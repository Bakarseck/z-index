import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { correctAnswerSelector, quizDataState } from '@/states/quizz';
import Layout from '@/components/layout/layoutGame';
import Image from 'next/image';
import { scoreState } from '@/states/crossword';
import Timer from '@/components/common/Timer';
import Score from '@/components/common/Score';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const QuizComponent = () => {
    const [quizData, setQuizData] = useRecoilState(quizDataState);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const setScore = useSetRecoilState(scoreState);
    const router = useRouter();

    const showSuccessToast = () => {
        toast.success("Vous avez gagné", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const currentData = quizData[currentImageIndex];

    const correctAnswer = useRecoilValue(correctAnswerSelector(currentImageIndex));

    const handleOptionSelect = (option) => {
        if (option === correctAnswer) {
            console.log('Correct!');
            setScore((oldValue) => oldValue + 10);
            toast.success("Vous avez trouvé", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("Vous avez faussé", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log('Incorrect!');
            return;
        }

        if (currentImageIndex < quizData.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            showSuccessToast();
            setTimeout(() => {
                setScore(0);
            }, 1000);
        }
    };

    return (
        <Layout>
            <div className="fixed flex flex-col items-center justify-center p-4 rounded-full top-5 left-5 bg-glass text-secondary font-kavoon sm:w-32 sm:h-32 sm:my-0">
                <Timer onTimeout={() => console.log('Timer has finished!')} />
                <Score score={0} />
            </div>
            <div className="flex flex-col items-center w-1/2 max-w-xs sm:w-3/4 md:w-1/2 lg:w-1/3">
                <Image
                    src={currentData.imageUrl}
                    alt={`Question ${currentImageIndex + 1}`}
                    width={200}
                    height={200}
                    priority={currentImageIndex === 0}
                    className='mb-5 rounded-xl'
                />

            </div>
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {currentData.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="text-xl text-white font-kavoon bg-center bg-no-repeat bg-contain w-[200px] h-[100px]"
                        style={{
                            backgroundImage: 'url(/assets/buttonWord.png)',
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>

        </Layout>
    );
};

export default QuizComponent;
