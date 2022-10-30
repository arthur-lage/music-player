import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

import "./styles/global.css";

const code = new URLSearchParams(window.location.search).get("code");

export function App() {
  return <>{code ? <Dashboard code={code} /> : <Login />}</>;
}
