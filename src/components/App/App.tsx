import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/GlobalStyles'
import { SideBar } from '../SideBar'
import { Container } from './styles'
import { themeLight } from '../../styles/theme'
import { Messages } from '../../pages/Messages'
const App: React.FC = () => {

  return (
		<ThemeProvider theme={themeLight}>
			<GlobalStyles />
			<Container>
				<SideBar />
				<Messages />
			</Container> 
		</ThemeProvider> 
  )
}

export default App
