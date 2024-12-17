import React from "react";
import { createRoot } from "react-dom/client";
import CalendarView from "./components/CalendarView";
import "react-calendar/dist/Calendar.css";
import Activity from "./components/Activity";

function App() {
  return (
    <div>
      <CalendarView />
      <Activity />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
