import { Link } from 'react-router-dom'

export const UsersPageItem = props => {
    const { user } = props
    const { id, name, email, address } = user
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>
                    <Link to={`/users/${id}`}>{name}</Link>
                </td>
                <td>{email}</td>
                <td>{address.city}</td>
            </tr>
        </tbody>
    )
}

export default UsersPageItem
