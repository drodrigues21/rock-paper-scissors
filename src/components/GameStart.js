
import { Link } from 'react-router-dom';
import cardsSrc from '../assets/cardsDB';
import Card from './Card';
import triangle from '../assets/bg-triangle.svg';
import './GameStart.css';

export default function GameStart() {

    return (
        <>
            {cardsSrc && <div className="game-start">
                <div className="triangle-container">
                    <img src={triangle} alt='' />
                </div>
                <div className="card-container card-top">
                    <Link to={`/round/paper`} className="card-hover">
                        <Card cardsSrc={cardsSrc[1]} />
                    </Link>
                    <Link to={`/round/scissors`} className="card-hover">
                        <Card cardsSrc={cardsSrc[2]} />
                    </Link>
                </div>
                <div className="card-container card-bottom">
                    <Link to={`/round/rock`} className="card-hover">
                        <Card cardsSrc={cardsSrc[0]} />
                    </Link>
                </div>
            </div>}
        </>
    )
}
