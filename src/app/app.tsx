import {Route, Routes} from 'react-router-dom';
import TaskApp from "@pages/main";

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<TaskApp/>}
      />
    </Routes>
  );
}

export default App;
