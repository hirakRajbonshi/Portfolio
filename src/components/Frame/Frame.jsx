import './Frame.css'
export default function Frame({data}) {
    let style = {
        animationTime: data.time,
        animationDelay: data.delay
    }
    return (
        <div className="frame" style={style}>
            <div className="pin" style={{backgroundColor: data.color}}></div>
            <h1 id='project-name'>{data.name}</h1>
            <h3 id='project-desc'>{data.description}</h3>
        </div>
    )
}