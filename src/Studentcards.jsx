import React from 'react'
import PropTypes from 'prop-types'

const Studentcards = (props) => {
  return (
    <div className='studentcard'>

        <p><b>Name:</b> {props.name}</p>
        <p><b>Age:</b> {props.age}</p>
        <p><b>Address:</b> {props.address}</p>

    </div>
  )
}
Studentcards.PropTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.string
}
Studentcards.defaultProps={
    name: "Guest",
    age: 18,
    address: "Pakistan"

}
export default Studentcards