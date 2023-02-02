import React from "react";
import { Footer } from "./Footer.jsx"
import { Jumbotron } from "./Jumbotron.jsx";
import { Main } from "./Main.jsx"
import { Navbar } from "./Navbar.jsx"

//create your first component
const Home = () => {
	return (

		<React.Fragment>
			
			<Navbar />
			<Jumbotron />
			<Main />
			<Footer />

		</React.Fragment>

	);
};

export default Home;
