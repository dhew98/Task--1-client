
import React from 'react';
import Swal from 'sweetalert2'


function App() {

    const buttonHandler=()=>{
      const currentDate = new Date().toISOString();

      const payload = {
        userID: '1703152',
        date: currentDate,
        deviceID: 'lenovo ideapad',
        queryText: 'Need a new charger!',
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
          Swal.fire("Check the Console!");
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
