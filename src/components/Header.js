import logo from '../assets/logo.svg';
import './Header.css';


export default function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="score-container">
                <p className="score-title">Score</p>
                <p className="score">12</p>
            </div>
        </div>
    )
}
