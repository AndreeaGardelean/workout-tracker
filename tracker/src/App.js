import React from "react";
import { createRoot } from "react-dom/client";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <div>
      <p>This message is from the App component</p>
      <CalendarView />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
