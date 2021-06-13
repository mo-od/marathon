import Personal from './components/Personal'
import AboutRunning from './components/AboutRunning';
import Emergency from './components/Emergency';
import MedicalInfo from './components/MedicalInfo';
import SouvenirShirt from './components/SouvenirShirt';
import React, { useState } from 'react';



  

function App() {
  
  const [stepper, setStepPer] = useState(0);

  return (
    <div className="App">
      {stepper === 0 ? 
        <Personal setStepPer={(value) => setStepPer(value)}/>:null
    }
      {stepper === 1 ? 
        <AboutRunning setStepPer={(value) => setStepPer(value)}/>:null
    }
      {stepper === 2 ? 
        <Emergency setStepPer={(value) => setStepPer(value)}/>:null
    }
      {stepper === 3 ? 
        <MedicalInfo setStepPer={(value) => setStepPer(value)}/>:null
    }
      {stepper === 4 ? 
        <SouvenirShirt setStepPer={(value) => setStepPer(value)}/>:null
    }
      
      {/* // <AboutRunning/>
      // <Emergency/>
      // <MedicalInfo/>
      // <SouvenirShirt/> */}
    </div>
  );
}

export default App;

 