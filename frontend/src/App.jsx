import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LoginRegister from "./Login-Register.tsx";
import LandingPage from "./LandingPage";
import NotFoundPage from './pages/NotFound.tsx';
import Layout from "./components/Layout";
import NewsPage from './pages/NewsPage.tsx';
import Account from "./pages/Account.tsx"
import AudiencePage from './pages/AudiencePage.tsx';
import ContactsPage from './pages/ContactsPage.tsx';
<<<<<<< HEAD
import SearchPage from './pages/SearchPage.tsx';
=======
import GoogleCallback from './components/GoogleCallback.jsx'
import GoogleLogin from './components/GoogleLogin.jsx';
import RatePage from './pages/RatePage.tsx';
>>>>>>> 39f5e247ca4933eb0634c8292c52e4ce94fa4a11
const App = () => {
  return(
    <Router id="App">
      <Routes>
         <Route path="/login-register" element={<LoginRegister/>} />
         <Route path="/api/auth/google/callback" element={<GoogleCallback />} />
         {/*нижче сторінки де має бути лейаут */}
          <Route path="/" element={<Layout />}>
          <Route path='/rating' element={<RatePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path='/audience-picker' element={<AudiencePage/>}/>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="news/:news_id" element={<NewsPage/>}></Route>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;