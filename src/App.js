//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// contexts
import { UserProvider } from "./contexts/UserContext";

// components
import Users from "./components/Users";

function App() {
	return (
		<div className="App">
			<UserProvider>
				<Users />
			</UserProvider>
		</div>
	);
}

export default App;
