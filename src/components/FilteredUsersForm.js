import React, { useContext } from "react";
import {Alert} from 'react-bootstrap';
import UserContext from "../contexts/UserContext";

function FilteredUsersForm() {
	const { filteredUserCount } = useContext(UserContext);

	return (
		<div>
			<Alert variant='light'> {filteredUserCount} Kullanıcı </Alert>
		</div>
	);
}

export default FilteredUsersForm;