import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import WorkshopsPage from './Pages/WorkshopsPage/WorkshopsPage';
import TeamsPage from './Pages/TeamsPage/TeamsPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="team" element={<TeamsPage />} />
        <Route path="workshops" element={<WorkshopsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
