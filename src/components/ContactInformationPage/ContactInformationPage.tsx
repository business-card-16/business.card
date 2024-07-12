import React from 'react'

const ContactInformationPage: React.FC = () => {
  return (
    <div>
      <h1>Contact Information</h1>
      <p>Provide ways for people to get in touch with you, such as email address and social media profiles (LinkedIn, Twitter, etc.).</p>
      <div>
        <label>Email</label>
        <input
            placeholder='Enter email'
        ></input>
      </div>
      <button>Next</button>
    </div>
  )
}

export default ContactInformationPage
