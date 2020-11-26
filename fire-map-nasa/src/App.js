import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css';
import Map from './component/Map';
import loading from './gif/810.gif'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data, setData] = useState([])
  const [reloading, setReloading] = useState(true)

  let fetchData = async () => {
    await Axios.get(' https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      .then(res => {
        if (res.data.events) {
          setData(res.data.events)
          setReloading(false)
        }
      }
      )

  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(reloading)
  return (
    <div className="App">
      {reloading ? <div className="img-gif"> <img src={loading} /></div> : <Map data={data} />}
    </div>
  );
}

export default App;
