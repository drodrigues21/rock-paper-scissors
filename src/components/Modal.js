import close from '../assets/icon-close.svg';
import rules from '../assets/image-rules.svg';
import './Modal.css';

export default function Modal({ closeRules }) {
    return (
        <div className="modal-background">
            <div className="modal">
                <div className="modal-title">
                    <h2>Rules</h2>
                    <img onClick={closeRules} src={close} alt="close button" />
                </div>
                <div className="modal-rules">
                    <img src={rules} alt="Game rules" />
                </div>
                <div className="modal-close-mobile">
                    <img onClick={closeRules} src={close} alt="close button" />
                </div>
            </div>
        </div>
    )
}
