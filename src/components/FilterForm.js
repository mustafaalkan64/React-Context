import React, { useContext } from "react";
import {Form} from 'react-bootstrap';
import UserContext from "../contexts/UserContext";

function FilterForm() {
	const { filter, setFilter} = useContext(UserContext);

	return (
		<div>
			<Form>
				<Form.Group controlId="filter">
					<Form.Control type="text" 
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							placeholder="Filter" />
				</Form.Group>

			</Form>
		</div>
	);
}

export default FilterForm;
