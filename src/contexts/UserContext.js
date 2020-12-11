import React, { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [filter, setFilter] = useState("");
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "Burak",
			email: "burak@hotmail.com"
		},
		{
			id: 2,
			name: "Filiz",
			email: "filiz@hotmail.com"
		},
		{
			id: 3,
			name: "Batu",
			email: "batu@hotmail.com"
		},
	]);
	const [, setFilteredUserCount] = useState(0);
	const values = {
		users,
		filteredUsers: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || data.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())),
		filteredUserCount: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || data.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).length,
		filter,
		setUsers,
		setFilter,
		setFilteredUserCount
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
