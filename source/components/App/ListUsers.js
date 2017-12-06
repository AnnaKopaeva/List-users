import React, { PropTypes } from 'react'

import User from './User'

const ListUsers = ({ data }) => {
    return(
        <ul className="users-list">
            {data.map(user =>
                <User
                    key={user.id}
                    user={user}
                />
            )}
        </ul>
    )
}

ListUsers.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ListUsers