import { DataProps } from './App'

const Results = ({ ip, location, isp }: DataProps) => {
    return (
        <div className="results">
            <div className="result">
                <p className="result__title">IP ADDRESS</p>
                <p className="result__value">{ip}</p>
            </div>
            <div className="result">
                <p className="result__title">LOCATION</p>
                <p className="result__value">{location.region} {location.country}</p>
            </div>
            <div className="result">
                <p className="result__title">TIMEZONE</p>
                <p className="result__value">UTC {location.timezone}</p>
            </div>
            <div className="result">
                <p className="result__title">ISP</p>
                <p className="result__value">{isp}</p>
            </div>
        </div>
    )
}

export default Results
