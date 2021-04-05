import "./App.css";
import { Branding } from "../../atoms/branding/Branding";
import { Navbar } from "../../organisms/navbar/Navbar";
import Hero from "../../molecules/hero/Hero";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
