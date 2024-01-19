import './Heading.css'
export default function Heading({main, sub}) {

    return (
        <div className="heading">
            <h3>{sub}</h3>
            <h1>{main}</h1>
        </div>
    )
}