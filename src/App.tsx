import "./App.css";
import {
  UseCallback,
  UseContext,
  UseDebugValue,
  UseDefferedValue,
  UseEffect,
} from "./components/hooks";

function App() {
  return (
    <>
      <div>Hello, this application have a all react hooks</div>
      <UseCallback />
      <UseContext />
      <UseDebugValue />
      <UseDefferedValue />
      <UseEffect />
    </>
  );
}

export default App;
