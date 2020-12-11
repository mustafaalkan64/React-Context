import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import {Table, Button} from 'react-bootstrap';

function List() {
	const { users, setUsers, setFilteredUserCount, filteredUsers } = useContext(UserContext);

	const handleDelete = (id) => {
	const filtered = users.filter((user) => user.id !== id);
		setUsers(filtered);
	};

	useEffect(() => {
		setFilteredUserCount(users.length);
		}, [users.length, setFilteredUserCount]);

	return (
		<div>
			<Table striped bordered hover>
			<thead>
				<tr>
				<th>Id</th>
				<th>First Name</th>
				<th></th>
				</tr>
			</thead>
			<tbody>
			{filteredUsers.map((user, i) => (
								// <ListItem key={i} user={user} />
					<tr>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td><Button type="button" onClick={() => handleDelete(user.id)} variant="danger">Sil</Button></td>
					</tr>
				))}

			</tbody>
			</Table>
		</div>
	);
}

export default List;
