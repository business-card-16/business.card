import React from 'react'

const NamePage: React.FC = () => {
  return (
    <div>
      <h1>Name details</h1>

      <div>
        <label>First name:</label>
        <input
          placeholder='Enter first name'
        ></input>
      </div>

      <div>
        <label>Last name</label>
        <input
          placeholder='Enter last name'
        ></input>
      </div>

      <button>Next</button>
    </div>
  )
}

export default NamePage
