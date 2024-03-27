import React from 'react'
import '../styles/MyCards.css'

export default function MyCards(props) {
    return (
        <div>
            <div className="card note-card" >
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">{props.btnTitle}</a>
                    </div>
            </div>
        </div>
    )
}
