import React, { useRef, useEffect } from 'react';

function App() {
  const innerDiv = useRef();
  useEffect(() => {
    const { current } = innerDiv;

    function getDimensions() {
      console.log(current);
    }

    window.addEventListener('load', getDimensions)

    return () => {
      window.removeEventListener('load', getDimensions);
    }

  }, [])

  return (
    <div class="container">
      <div id="inner" ref={innerDiv}>Hello, World</div>
    </div>
  );
}

export default App;
