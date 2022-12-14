// Import Components

// Import React Depencies
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ApplicationPage/Navbar/Navbar";
import Login from "./components/StartPage/Login/Login";
import Start from "./components/StartPage/Start/Start";
import { Link, useNavigate } from 'react-router-dom';
import Learn from "./components/ApplicationPage/Learn/Learn";
import Explore from "./components/ApplicationPage/Explore/Explore";
import News from "./components/ApplicationPage/News/News";
import Saved from "./components/ApplicationPage/Saved/Saved";
import InfoModal from "./components/ApplicationPage/InfoModal/InfoModal";



export const AppContext = createContext();

function App() {
  
  const [waveMotion, setWaveMotion] = useState('wave-motion')
  const [navbar, setNavbar] = useState('Navbar-page hidden')
  const [createForm, setCreateForm] = useState('Login-form hide')
  const [loginForm, setLoginForm] = useState('Login-form')
  const [username, setUsername] = useState('')
  const [explorePage, setExplorePage] = useState('Explore-page')
  const [savedPage, setSavedPage] = useState('Saved-page')
  const [infoModal, setInfoModal] = useState('Info-modal-page hidden')

  //Info Modal state
  const [NFTname, setNFTname] = useState()
  const [NFTdescription, setNFTdescription] = useState()
  const [NFTimage, setNFTimage] = useState()
  const [NFTid, setNFTid] = useState()
  
  //Navbar selection
  const [navLearn, setNavLearn] = useState('navbar-item not-selected')
  const [navNews, setNavNews] = useState('navbar-item not-selected')
  const [navExplore, setNavExplore] = useState('navbar-item not-selected')
  const [navSaved, setNavSaved] = useState('navbar-item not-selected')

  //Updates
  const [savedArticlesUpdated, setSavedArticlesUpdated] = useState(0)
  const [savedNFTsUpdated, setSavedNFTsUpdated] = useState(0)


  const navigate = useNavigate();
  
  return (
    <div className="App">
      <AppContext.Provider value={{
        waveMotion, setWaveMotion,
        navbar, setNavbar,
        createForm, setCreateForm,
        loginForm, setLoginForm,
        navLearn, setNavLearn,
        navNews, setNavNews,
        navExplore, setNavExplore,
        navSaved, setNavSaved,
        savedArticlesUpdated, setSavedArticlesUpdated,
        savedNFTsUpdated, setSavedNFTsUpdated,
        username, setUsername,
        explorePage, setExplorePage,
        savedPage, setSavedPage,
        infoModal, setInfoModal,
        NFTname, setNFTname,
        NFTdescription, setNFTdescription,
        NFTimage, setNFTimage,
        NFTid, setNFTid
      }}>
        <div className="logo-text-container">
          <span className="logo-text"
          onClick={()=>{
            navigate('/*', {replace:true})
          }}>NiFT</span>
        </div>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/news" element={<News />} />
          <Route path="/explore" element={
              <>
                <Explore />
                <InfoModal type='add'/>
              </>
            } />
          <Route path="/saved" element={
              <>
                <Saved />
                <InfoModal type='remove'/>
              </>
            } />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;