import React, { PropTypes } from 'react'

const User = ({ user }) => (
    <li className="users-list_item">
        <span className="users-list_id">{user.id}</span>
        <span>{user.name}</span>
        <span>{user.surname}</span>
        <p>{user.desc}</p>
    </li>
)

// User.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired
// }

export default User