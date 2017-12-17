import React, { PropTypes } from 'react'

const User = ({ user }) => (
  <li className="users-list_item">
    <div className="id-wrapper">
      <span className="users-list_id">{user.id}</span>
    </div>
    <div className="info-wrapper">
      <span className="users-list_name">{user.name}</span>
      <p>Email:</p>
      <span className="users-list_email">{user.email}</span>
      <p>Company:</p>
      <span className="users-list_company">{user.company.name}<br/> {user.company.catchPhrase}<br/> {user.company.bs}</span>
    </div>
  </li>
)

export default User