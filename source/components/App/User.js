import React, { PropTypes } from 'react'

const User = ({ user }) => (
    <li className="users-list_item">
        <span className="users-list_id">{user.id}</span>
        <span className="users-list_name">{user.name} {user.surname}</span>
        <p>{user.desc}</p>
    </li>
)

export default User