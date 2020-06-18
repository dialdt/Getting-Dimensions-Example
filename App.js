import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    let element = document.getElementById('inner');
    
    console.log('Width: ', element.offsetWidth, ' Height: ', element.offsetHeight);
  })

  return (
    <div class="container">
      <div id="inner">Hello, World</div>
    </div>
  );
}

export default App;
