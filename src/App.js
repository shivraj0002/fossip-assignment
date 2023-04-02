import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import theme from './theme/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
