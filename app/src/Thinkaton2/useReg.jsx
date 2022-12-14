import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./Register";
import Lay from "./lay";
export default function Whole() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lay />}>
          {/* <Route index element={< Candidates/>} > */}
          <Route index element={<Candidate />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
