import { useState } from "preact/hooks";
import { Switch } from "./switch";

export function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-center align-middle items-center flex-col h-screen">
      <h1 className="text-2xl font-bold mb-5">Preact + Vite</h1>
      <Switch
        id="test"
        label="Just a test"
        checked={checked}
        onChecked={setChecked}
      />
    </div>
  );
}
