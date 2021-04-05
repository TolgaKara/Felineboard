import "./App.css";
import { Branding } from "../../atoms/branding/Branding";
import { Navbar } from "../../organisms/navbar/Navbar";
import Hero from "../../molecules/hero/Hero";
import { Features } from "../../organisms/features/Features";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
		</div>
	);
}

export default App;
