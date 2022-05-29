import { Header } from "./components/header/header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllCats } from "./components/allCats/allCats";


export const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="favorite" element={<>favorite</>} />
        <Route path="*" element={<AllCats />} />
      </Routes>
    </BrowserRouter>
  </>
}
