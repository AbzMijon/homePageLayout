import { Header } from "./components/header/Header";
import { Main } from "./pages/Main";
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
    </Routes>
    </>
  );
}

export default App;
