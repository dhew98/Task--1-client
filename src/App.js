
import React from 'react';


function App() {

    const buttonHandler=()=>{
      const currentDate = new Date().toISOString();

      const payload = {
        userID: '1703153',
        date: currentDate,
        deviceID: 'asusP45UQ',
        queryText: 'Need a new battery!',
      };


      fetch( 'http://localhost:5000/support/create_ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
   

  return (
    <div className="App">
      <button type="text" onClick={buttonHandler}>Create Ticket</button>
    </div>
  );
}

export default App;
