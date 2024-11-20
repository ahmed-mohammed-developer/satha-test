import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // تأكد من تضمين هذا الملف
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from './components/Head/Head';

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
      </div>
    </ThemeProvider>
  );
}

export default App;
