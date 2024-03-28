import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "@/pages/Portfolio.tsx";
import Blog from "@/pages/Blog.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
