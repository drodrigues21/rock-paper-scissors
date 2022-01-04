import './Rules.css';

export default function Rules({ openRules }) {
    return (
        <div className="rules-container">
            <button onClick={openRules} className="rules">Rules</button>
        </div>
    )
}
