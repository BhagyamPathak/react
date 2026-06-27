import { Bookmark } from 'lucide-react'

function Card(props){
    console.log(props)
return(
    <div className="card">
        <div className="top">
            <div className="logo">
                <img src={props.brandLogo} alt="" />
            </div>
            <button>Saved</button>
        </div> 
        <div className="mid">
            <div className="m1">
                <div className="company">{props.company}</div>
                <p>{props.datePosted}</p>
            </div>
            <div className="m2">{props.post}</div>
            <div className="m3">
                <div className="box">{props.tag1}</div>
                <div className="box">{props.tag2}</div>
            </div>
        </div>
        <hr />
        <div className="bottom">
            <div className="about">
                <div className="salary">{props.pay}</div>
                <div className="address">{props.location}</div>
            </div>
            <div className="apply">Apply now</div>
        </div>
    </div>
)
}

export default Card