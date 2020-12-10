import React from "react";

import List from "./List";
import NewUserForm from "./NewUserForm";
import FilterForm from "./FilterForm";
import FilteredUsersForm from "./FilteredUsersForm";

function Users() {
	return (
		<div style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
			<FilterForm />
			<List />
			<NewUserForm />
			<FilteredUsersForm />
		</div>
	);
}

export default Users;
