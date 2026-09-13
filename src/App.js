import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StudentList from "./Pages/StudentList";
import FavouriteStudents from "./Pages/FavouriteStudent";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/favourites" element={<FavouriteStudents />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;