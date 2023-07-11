import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleOnKeyDown(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleOnKeyDown);

    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [key, callback]);
}

export default useKeyDown;
