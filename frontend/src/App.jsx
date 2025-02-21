import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
       
        <Footer />
      </div>
   
  );
}

export default App;