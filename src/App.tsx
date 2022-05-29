import { Header } from "./components/header/header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllCats } from "./components/allCats/allCats";
import { FavoriteCats } from "./components/favoriteCats/favoriteCats";


export const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="favorite" element={<FavoriteCats />} />
        <Route path="*" element={<AllCats />} />
      </Routes>
    </BrowserRouter>
  </>
}
