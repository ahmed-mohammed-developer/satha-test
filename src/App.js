import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // تأكد من تضمين هذا الملف
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from './components/Head/Head';
import Features from './components/Features/Features'
import Weexist from './components/Weexist/Weexist';
import Why from './components/Why/Why';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Cairo',
      'Tajawal',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
      <Head />
      <Features />
      <Weexist />
      <Why />
      </div>
    </ThemeProvider>
  );
}

export default App;
