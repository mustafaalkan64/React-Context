import React, { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [filter, setFilter] = useState("");
    const [filteredUserCount, setFilteredUserCount] = useState(0);
	const [users, setUsers] = useState([
		{
			id: uuidv4(),
			name: "Burak",
		},
		{
			id: uuidv4(),
			name: "Filiz",
		},
		{
			id: uuidv4(),
			name: "Batu",
		},
	]);
	const values = {
		users,
		filteredUsers: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
		),
		setUsers,
		filter,
		setFilter,
		filteredUserCount: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).length,
		setFilteredUserCount
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
