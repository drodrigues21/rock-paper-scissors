import { Routes, Route } from "react-router-dom";
import GameStart from "./GameStart";
import Round from "./Round";
import './Home.css';


export default function Home({ score, setScore }) {
    return (
        <div className="game-container">
            <Routes>
                <Route path="/" element={<GameStart />} />
                <Route
                    path="/round/:name" element={<Round setScore={setScore} score={score}></Round>} />
            </Routes>
        </div>
    )
}
