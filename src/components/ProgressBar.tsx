import { useState, useEffect } from "react";
import {Progress} from "@nextui-org/progress";

export default function ProgressBar():JSX.Element {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 90 ? 0 : v + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      aria-label="Downloading..."
      size="lg"
      value={value}
      color="danger"
      showValueLabel={true}
      className="max-w-md"
    />
  );
}
