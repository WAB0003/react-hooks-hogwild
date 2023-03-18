import React from "react";
import Nav from "./Nav";
import Piglist from "./Piglist";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Piglist hogs={hogs} />
		</div>
	);
}

export default App;
