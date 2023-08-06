import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import SearchForm from './SearchForm'
import Results from './Results'
import Map from './Map'

export type DataProps = {
  ip: string
  location: LocationProps
  isp: string
}

type LocationProps = {
  country: string
  region: string
  timezone: string
  lat: number
  lng: number
}



function App() {
  const [ipQuery, setIpQuery] = useState('')
  const [data, setData] = useState<DataProps>({
    ip: '',
    location: {
      country: '',
      region: '',
      timezone: '',
      lat: 0,
      lng: 0
    },
    isp: ''
  })

  const getData = async () => {
    try {
      const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5grQ4RAYTIyrOUc0KbljF14YPbn6a&ipAddress=${ipQuery}`)
      console.log(res.data)

      setData({
        ip: res.data.ip,
        location: {
          country: res.data.location.country,
          region: res.data.location.region,
          timezone: res.data.location.timezone,
          lat: res.data.location.lat,
          lng: res.data.location.lng,
        },
        isp: res.data.isp
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipQuery])


  const { ip, location, isp } = data
  return (
    <>
      <div className='top'>
        <div className="content__container">
          <h1 className="heading">IP Address Tracker</h1>

          <SearchForm ipQuery={ipQuery} setIpQuery={setIpQuery} />

          <Results ip={ip} location={location} isp={isp} />
        </div>
      </div>

      <Map lat={location.lat} lng={location.lng} ip={ip} />
    </>
  )
}

export default App
