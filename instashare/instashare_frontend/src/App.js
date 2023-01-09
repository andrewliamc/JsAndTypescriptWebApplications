import React from 'react'

const App = () => {
  useEffect(() => {
    const initClient = () => {
        gapi.client.init({
        clientId: clientId,
        scope: '',
        });
      };
      gapi.load('client:auth2', initClient);
  });

  return (
    <div>
      Hello World.
    </div>
  )
}

export default App