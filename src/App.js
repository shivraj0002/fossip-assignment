import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import theme from './theme/themes';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
