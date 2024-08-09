import React from 'react'
import 'c-h.css'

const cardH = (props) => {
  return (
    <>
        <div className="col-lg-4">
          <div className="card bg-transparent text-white">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.decs}</p>
              <a href="#" className="btn btn-outline-light">Read More</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default cardH