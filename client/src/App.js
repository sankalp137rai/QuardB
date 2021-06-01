import "./App.css";
import Card from "./components/card";
import "./utils/fonts/fontStyle.css";

function App() {
	return (
		<div className="App" style={{ minHeight: "100vh" }}>
			<header className="header">
				<div>
					<h1>
						HODLINEINFO<span>.COM</span>
					</h1>
					<p>
						<span>Powered by </span>FineStreet
					</p>
				</div>
				<div className="headerContainerSecond">
					<p>58</p>
					<a href="#">Contact telegram</a>
				</div>
			</header>
			<Card />
			<footer></footer>
			<script src="app.js" type="text/javascript"></script>
		</div>
	);
}

export default App;
