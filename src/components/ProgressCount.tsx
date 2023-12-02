import { useState, useEffect } from "react";

export default function ProgressCount():JSX.Element {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 90 ? 0 : v + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="font-sans font-extrabold text-gray-700 text-4xl mb-20">{`${value} %`}</h2>
  );
}
