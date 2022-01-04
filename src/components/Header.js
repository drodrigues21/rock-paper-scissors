import logo from '../assets/logo.svg';
import './Header.css';


export default function Header({ score }) {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="Rock, Paper, Scissors game" />
            </div>
            <div className="score-container">
                <p className="score-title">Score</p>
                <p className="score">{score}</p>
            </div>
        </div>
    )
}
