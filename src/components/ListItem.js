import React, { useContext } from "react";
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import UserContext from "../contexts/UserContext";

function ListItem({ user }) {
	const { users, setUsers, setFilteredUserCount } = useContext(UserContext);

	const handleDelete = (id) => {
		const filtered = users.filter((user) => user.id !== id);
		setUsers(filtered);
		setFilteredUserCount(filtered.length);
	};

	return (
		<div>
			<ListGroup.Item key={user.id}>
			{user.name}{" "}
			<Button type="button" onClick={() => handleDelete(user.id)} variant="danger">Sil</Button>

			</ListGroup.Item>
		</div>
	);
}

export default ListItem;
