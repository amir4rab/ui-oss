"use client";

import { Switch } from "@/components/styled/switch";
import { useState } from "react";

const Test = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      id="test"
      label="Just a test"
      checked={checked}
      onChecked={setChecked}
    />
  );
};

export default Test;
