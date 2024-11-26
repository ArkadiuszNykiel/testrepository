import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

function CountryDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
                if (!response.ok) throw new Error("Failed to fetch country details");
                const result = await response.json();
                setCountry(result[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCountryDetails();
    }, [id]);

    return (
        <div className="country-details">
            {country ? (
                <div>
                    <h1>{country.name.official}</h1>
                    <img src={country.flags.png} alt={`${country.name.official} flag`} />
                    <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                    <p><strong>Subregion:</strong> {country.subregion}</p>
                    <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
                    <p><strong>Top-Level Domain:</strong> {country.tld.join(", ")}</p>
                </div>
            ) : (
                <p>Loading country details...</p>
            )}
        </div>
    );
}

export default CountryDetails;
