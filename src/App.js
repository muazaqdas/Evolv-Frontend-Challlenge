import React from 'react';
import Dashboard from './Components/Dashboard'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Workout from './Components/WorkoutPage';
import NutritionPage from './Components/NutrPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path=":id/workout" element={<Workout/>}/>
            <Route path=":id/nutrition" element={<NutritionPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
