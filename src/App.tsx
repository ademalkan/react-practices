import "./App.css";
import {
  UseCallback,
  UseContext,
  UseDebugValue,
  UseDefferedValue,
  UseEffect,
  UseId,
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
      <UseId />
    </>
  );
}

export default App;
