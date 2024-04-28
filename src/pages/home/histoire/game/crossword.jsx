import React, { useEffect } from 'react';
import Layout from "@/components/layout/layoutGame";
import { crosswordState, crosswordGridState, scoreState, crosswordClues, initialGrid } from '@/states/crossword';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import Timer from '@/components/common/Timer';
import Score from '@/components/common/Score';
import { useRouter } from 'next/router';

export default function CrossWord() {
    const [cluesState, setCluesState] = useRecoilState(crosswordState);
    const [grid, setGrid] = useRecoilState(crosswordGridState);
    const setScore = useSetRecoilState(scoreState);

    const router = useRouter();

    const handleInputChange = (e, row, col) => {
        const value = e.target.value.toUpperCase();

        const nextCol = col + 1;
        if (nextCol <= 10 && grid[row][nextCol] != "0") {
            moveFocusToCell(row, nextCol);
        } else {
            const nextRow = row + 1;
            if (nextRow < grid.length) {
                moveFocusToCell(nextRow, 0);
            }
        }

        const newGrid = grid.map((gridRow, rIndex) =>
            gridRow.map((cell, cIndex) => (rIndex === row && cIndex === col) ? value : cell));

        setGrid(newGrid);

        Object.values(cluesState).forEach(clue => {
            let userAnswer = '';
            let startIndex, checkIndex;
            const endIndex = clue.direction === 'across' ? clue.col - 1 + clue.answer.length : clue.row - 1 + clue.answer.length;

            for (let i = 0; i < clue.answer.length; i++) {
                if (clue.direction === 'across') {
                    startIndex = clue.col - 1;
                    checkIndex = startIndex + i;
                    if (row === clue.row - 1 && col >= startIndex && col < endIndex) {
                        userAnswer += newGrid[clue.row - 1][checkIndex];
                    }
                } else {
                    startIndex = clue.row - 1;
                    checkIndex = startIndex + i;
                    if (col === clue.col - 1 && row >= startIndex && row < endIndex) {
                        userAnswer += newGrid[checkIndex][clue.col - 1];
                    }
                }
            }

            const isComplete = userAnswer.length === clue.answer.length;
            const isCorrect = isComplete && userAnswer.toUpperCase() === clue.answer.toUpperCase();

            if (isCorrect) {
                setScore((oldScore) => oldScore + 10);
                setCluesState((oldCluesState) => ({
                    ...oldCluesState,
                    [clue.number]: {
                        ...oldCluesState[clue.number],
                        isAnsweredCorrectly: true,
                    },
                }));
            }
        });
    };

    function handleKeyDown(e, rowIndex, colIndex) {
        const key = e.key;
        const maxIndex = grid[0].length - 1;

        switch (key) {
            case 'ArrowLeft':
                if (colIndex > 0) moveFocusToCell(rowIndex, colIndex - 1);
                break;
            case 'ArrowRight':
                if (colIndex < maxIndex) moveFocusToCell(rowIndex, colIndex + 1);
                break;
            case 'ArrowUp':
                if (rowIndex > 0) moveFocusToCell(rowIndex - 1, colIndex);
                break;
            case 'ArrowDown':
                if (rowIndex < maxIndex) moveFocusToCell(rowIndex + 1, colIndex);
                break;
            default:
                break;
        }
    }

    function moveFocusToCell(rowIndex, colIndex) {

        while (colIndex < grid[0].length && grid[rowIndex][colIndex] === '0') {
            colIndex++;
        }

        if (colIndex >= grid[0].length) {
            return;
        }

        const input = document.querySelector(`#cell-${rowIndex}-${colIndex}`);
        if (input) {
            input.focus();
            input.select();
        }
    }

    const resetAllStates = () => {
        setCluesState(crosswordClues.reduce((acc, clue) => {
            acc[clue.number] = {
                ...clue,
                isAnsweredCorrectly: false,
            };
            return acc;
        }, {}));
        setGrid(initialGrid);
        setScore(0);
    };

    useEffect(() => {
        const allCorrect = Object.values(cluesState).every(clue => clue.isAnsweredCorrectly);
        if (allCorrect) {
            showSuccessToast();
            setTimeout(() => {
                router.push("/home/histoire");
                resetAllStates();
            }, 2000)
        }
    }, [cluesState]);

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

    return (
        <Layout>
            <div className="flex items-center justify-center flex-col my-4 max-w-[40%] absolute top-5 left-5 w-[150px] h-[150px] bg-glass rounded-full text-secondary font-kavoon">
                <Timer onTimeout={() => console.log('Timer has finished!')} />
                <Score score={0} />
            </div>
            <div className="flex items-center justify-center max-w-4xl mx-auto my-10">
                <div className="grid grid-cols-11 gap-1">
                    {grid.map((row, rowIndex) => (
                        row.map((cell, colIndex) => (
                            <input
                                key={`cell-${rowIndex}-${colIndex}`}
                                id={`cell-${rowIndex}-${colIndex}`}
                                type="text"
                                maxLength="1"
                                className={`w-7 h-7 text-base text-center font-kavoon text-secondary placeholder-gray-400 ${cell !== '0' ? 'bg-white' : 'bg-transparent'}`}
                                onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                                onChange={(e) => handleInputChange(e, rowIndex, colIndex, cell)}
                                placeholder={cell.includes('-') ? `${cell.charAt(2)}` : cell.replace(/[^A-Z]/g, '')}
                                disabled={cell === '0'}
                            />
                        ))
                    ))}
                </div>
                <div className="my-4 max-w-[40%]">
                    <div className="ml-10">
                        {Object.values(cluesState).map(clue => (
                            <p key={clue.number} className={`mt-2 text-sm font-kavoon text-secondary ${clue.isAnsweredCorrectly ? 'line-through' : ''}`}>
                                {clue.number}. {clue.question}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
