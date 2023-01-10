import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Modal} from "./components/Common/Modal";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/page" element={<Modal/>}/>
        </Routes>
    )
}

export default App;
