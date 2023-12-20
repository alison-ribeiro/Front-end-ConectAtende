import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/GlobalStyles'
import { SideBar } from '../SideBar'
import { Container } from './styles'
import { themeLight } from '../../styles/theme'
const App: React.FC = () => {

  return (
		<ThemeProvider theme={themeLight}>
			<Container>
				<GlobalStyles />
				<SideBar />
			</Container> 
		</ThemeProvider> 
  )
}

export default App
