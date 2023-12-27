import "./App.css";
import {
  UseCallback,
  UseContext,
  UseDebugValue,
  UseDefferedValue,
  UseEffect,
  UseId,
  UseImperativeHandle,
  UseOptimistic,
  UseReducer,
} from "./components/hooks";

function App() {
  return (
    <>
      <h2>Hello, this application have a all react hooks</h2>
      <hr />
      <UseCallback />
      <UseContext />
      <UseDebugValue />
      <UseDefferedValue />
      <UseEffect />
      <UseId />
      <UseImperativeHandle/>
      <UseOptimistic/>
      <UseReducer/>
    </>
  );
}

export default App;
