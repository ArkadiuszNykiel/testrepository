
import './Country.css';  

function Country({ param }) {
    return (
        <div className="country-item">
            <span className="country-name">{param.name.official}</span>
            <img
                src={param.flags.png}
                alt={`${param.name.official} flag`}
                className="country-flag"
            />
        </div>
    );
}

export default Country;
