import Header from "./components/Header";
import Shop from "./components/Shop";
import { CartContextProvider } from "./store/context";

const App = () => {
	return (
		<CartContextProvider>
			<Header />
			<Shop />
		</CartContextProvider>
	);
};

export default App;
