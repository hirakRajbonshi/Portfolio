import './Card.css'

export default function Card({details}) {
    return (
        <div className="card">
            <div className="card-heading">
                <h1>{details.head}</h1>
            </div>
            <ul>
                {
                    details.data.map((a) => (
                        <li>
                            {a}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}