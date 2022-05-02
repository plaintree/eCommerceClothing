import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/nav/nav.component";
import Authentication from "./routes/auth/auth.component";

const Shop = () => {
	return <h2>Shop page is here</h2>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
