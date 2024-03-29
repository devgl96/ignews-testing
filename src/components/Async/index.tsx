import { useEffect, useState } from "react";

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {isButtonVisible && <button>ButtonVisible</button>}
      {!isButtonInvisible && <button>ButtonInvisible</button>}
    </div>
  );
}
