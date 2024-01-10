import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { SideBar } from "../SideBar";
import { Container } from "./styles";
import { themeLight } from "../../styles/theme";
import { Messages } from "../../pages/Messages";
import { UserProvider } from "../../contexts/UserContext";
import { SelectedProvider } from "../../contexts/SelectedContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const App: React.FC = () => {
	
	return (
		<ThemeProvider theme={themeLight}>
			<UserProvider>
				<SelectedProvider>
					<GlobalStyles />
					<Provider store={store}>
						<Container>
							<SideBar />
							<Messages />
						</Container> 
					</Provider>
				</SelectedProvider>
			</UserProvider>
		</ThemeProvider> 
	);
};

export default App;
