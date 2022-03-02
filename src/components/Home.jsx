import React from 'react'
import HistoryTable from './HistoryTable' 
import Dropdown from './Dropdown';

function Home() {

  const cars = [
    { id: 1, name: 'Toyota Rav4' },
    { id: 2, name: 'Honda Accord' }
  ] 

  return (
      <React.Fragment>
        <div style={{ width: '90%', margin:'auto', marginTop: '50px' }}>
            <div style={{ marginBottom: '20px', textAlign: 'right' }}>
              <Dropdown cars={cars}/>
            </div>
            <HistoryTable />
        </div>

      </React.Fragment>
  )
}

export default Home;