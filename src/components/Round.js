import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect, useCallback } from 'react';
import cardsSrc from '../assets/cardsDB';
import Card from './Card';
import './Round.css';

export default function Round({ score, setScore }) {

    const { name } = useParams();
    const [winCondition, setWinCondition] = useState('');
    const [houseCard, setHouseCard] = useState(null);
    const [won, setWon] = useState('');
    const [lost, setLost] = useState('');

    let userChoice;
    cardsSrc.filter((card) => {
        if (card.name === name) {
            userChoice = card;
            return userChoice;
        }
        return null;
    })

    const addOne = useCallback(() => {
        setScore((currentScore) => currentScore += 1);
    })

    const removeOne = useCallback(() => {
        setScore((currentScore) => currentScore -= 1);
    })

    useEffect(() => {
        const playAgain = document.querySelector('.play-again');

        const housePicked = () => {
            let rNum = Math.floor(Math.random() * 3);
            let house;

            if (rNum === 0) {
                setHouseCard(0);
                house = 'rock';
                return house;
            } else if (rNum === 1) {
                setHouseCard(1);
                house = 'paper';
                return house;
            } else {
                setHouseCard(2);
                house = 'scissors';
                return house;
            }
        }

        const gameRound = () => {
            let user = userChoice.name;
            let house = housePicked();

            if (user === 'rock') {
                if (house === 'rock') {
                    setWinCondition('tie');
                } else if (house === 'paper') {
                    setWinCondition('you lose');
                    setLost('round-winner');
                    if (score === 0) {
                        setScore(0);
                    } else {
                        removeOne();
                    }
                } else {
                    setWinCondition('you win');
                    setWon('round-winner');
                    addOne();
                }
            } else if (user === 'paper') {
                if (house === 'rock') {
                    setWinCondition('you win');
                    setWon('round-winner');
                    addOne();
                } else if (house === 'paper') {
                    setWinCondition('tie');
                } else {
                    setWinCondition('you lose');
                    setLost('round-winner');
                    if (score === 0) {
                        setScore(0);
                    } else {
                        removeOne();
                    }
                }
            } else {
                if (house === 'rock') {
                    setWinCondition('you lose');
                    setLost('round-winner');
                    if (score === 0) {
                        setScore(0);
                    } else {
                        removeOne();
                    }
                } else if (house === 'paper') {
                    setWinCondition('you win');
                    setWon('round-winner');
                    addOne();
                } else {
                    setWinCondition('tie');
                }
            }
        }

        setTimeout(() => {
            gameRound();
            playAgain.style.display = 'flex';
        }, 500)

    }, [])

    return (
        <div className='round-container'>
            <div className="round-card player-container">
                <div className={`round-winner-container ${won}`}>
                    <Card cardsSrc={userChoice} />
                </div>
                <p>You Picked</p>
            </div>
            <div className="round-card house-container">
                {houseCard === null ? <div className='waiting-house'></div> : <div className={`round-winner-container ${lost}`}><Card cardsSrc={cardsSrc[houseCard]} /></div>}
                <p>The House Picked</p>
            </div>
            <div className="play-again">
                <p>{winCondition}</p>
                <Link className='play-again-btn' to="/">
                    <button>Play Again</button>
                </Link>
            </div>

        </div>
    )
}


