import MainPage from './pages/MainPage';
import { UserToggle} from './hooks';

function App() {

  const [currentMode, toggleValue] = UserToggle();

  return (
    <div className={currentMode ? "dark" : "light"}>
      <button onClick={toggleValue}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
