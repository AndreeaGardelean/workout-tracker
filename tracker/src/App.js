import React from "react";
import { createRoot } from "react-dom/client";
import CalendarView from "./components/CalendarView";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <div>
      <CalendarView />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
