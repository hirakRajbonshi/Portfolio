import './FrameLogo.css'
export default function FrameLogo({data}) {
    let style = {
        animationTime: data.time,
        animationDelay: data.delay
    }

    return (
        <div className="frameLogo" style={style}>
            <div className="pin" style={{backgroundColor: data.color}}></div>
            <div className="logo-container">
                <img id='skill-logo' src={data.image} alt="" />
            </div>
            <h1 id='skill-heading'>{data.name}</h1>
        </div>
    )
}