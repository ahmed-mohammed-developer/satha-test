import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // تأكد من تضمين هذا الملف
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Post from './components/Post/Post.jsx';
import Head from './components/Head/Head';
import Features from './components/Features/Features'
import Weexist from './components/Weexist/Weexist';
import Why from './components/Why/Why';
import Albomimg from './components/Albomimg/Albomimg.jsx'
import Footer from './components/Footer/Footer.js'
import { BiSolidPhoneCall } from "react-icons/bi";


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
      <Post />
      <Features />
      <Weexist />
      <Why />
      <Albomimg />
      <Footer />
      </div>
      <a href="tel:0500686864" className="whatsapp-float"  rel="noopener noreferrer">
        <BiSolidPhoneCall  size={40} />
      </a>
    </ThemeProvider>
  );
}

export default App;
