import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import WorkshopsPage from './Pages/WorkshopsPage/WorkshopsPage';
import TeamsPage from './Pages/TeamsPage/TeamsPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import CladdingCode from './Pages/EventsPage/Events/CladdingCode';
import ElectroNfs from './Pages/EventsPage/Events/ElectroNfs';
import ElectronicArt from './Pages/EventsPage/Events/ElectronicArt';
import ElectronicChess from './Pages/EventsPage/Events/ElectronicChess';
import BombDiffusion from './Pages/EventsPage/Events/BombDiffusion';
import LaserStrike from './Pages/EventsPage/Events/LaserStrike';
import Sherlocked from './Pages/EventsPage/Events/Sherlocked';
import WebQuest from './Pages/EventsPage/Events/WebQuest';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="team" element={<TeamsPage />} />
        <Route path="workshops" element={<WorkshopsPage />}/>
        <Route path="claddingcode" element={<CladdingCode />}/>
        <Route path="electronfs" element={<ElectroNfs />}/>
        <Route path="electronicart" element={<ElectronicArt />}/>
        <Route path="electronicchess" element={<ElectronicChess />}/>
        <Route path="bombdiffusion" element={<BombDiffusion />}/>
        <Route path="laserstrike" element={<LaserStrike />}/>
        <Route path="sherlocked" element={< Sherlocked/>}/>
        <Route path="webquest" element={<WebQuest />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
