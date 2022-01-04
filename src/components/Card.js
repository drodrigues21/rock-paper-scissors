import './Card.css';

export default function Card({ cardsSrc }) {

    return (
        <>
            {cardsSrc &&
                <div className={`card ${cardsSrc.name}`}>
                    <div className="inner-card">
                        <div className="card-img">
                            <img src={cardsSrc.src} alt={cardsSrc.name} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
