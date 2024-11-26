import { useState } from "react";
import { Link } from "react-router-dom";
import Country from "./Country";
import Loading from "./Loading/Loading";
import "./Countries.css";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [regionFilter, setRegionFilter] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            setCountries(result);
            setFilteredCountries(result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        if (!searchTerm) return;
        fetchData();
    };

    const handleRegionChange = (e) => {
        const region = e.target.value;
        setRegionFilter(region);
        const filtered = countries.filter(
            (country) => !region || country.region === region
        );
        setFilteredCountries(filtered);
    };

    return (
        <div className="countries-container">
            <div className="countries-list-container">
                <h1>Countries</h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by country"
                />
                <button onClick={handleSearch}>Search</button>
                <select value={regionFilter} onChange={handleRegionChange}>
                    <option value="">All Regions</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <ul className="countries-list">
                    {isLoading && <Loading />}
                    {filteredCountries.map((country, index) => (
                        <li key={index} className="countries-list-item">
                            <Link to={`/countries/${country.cca3}`}>
                                <Country param={country} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Countries;
