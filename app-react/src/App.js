import React, { useState, useEffect } from "react";
import data from "./data.json";
const Countries = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Search by Region");

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleRegionFilter = (event) => {
    const region = event.target.value;

    setSelectedRegion(region);
    setFilteredData(
      region === "Filter by Region"
        ? data
        : data.filter((country) => country.region === region)
    );
  };

  const handleSearch = (event) => {
    const inputData = event.target.value.toLowerCase();

    setSearchInput(inputData);
    setFilteredData(
      data.filter((country) =>
        country.name.toLowerCase().includes(inputData)
      )
    );
  };

  const regionOptions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div class="bg-slate-600">
      <div class="bg-slate-600 mt-0 p-4 mb-4 flex flex-col md:flex-row md:justify-between">
        <p class="md:ml-4 text-white font-bold text-xl">Where in the world?</p>
        <p class="justify-end text-white font-bold text-xl">Dark Mode</p>
      </div>
      <div className="bg-slate-700 pl-4 md:pl-0 md:pt-8 ">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
          <input
            type="text"
            placeholder="Search for a country....."
            class=" text-white h-12 md:h-10 p-5 md:ml-4 w-full md:w-96 bg-slate-600 mb-2 md:mb-0"
            value={searchInput}
            onChange={handleSearch}
          />

          <select
            className="text-white h-12 md:h-10 p-5 w-full md:w-48 bg-slate-600 md:mr-5"
            value={"selectedRegion"}
            onChange={handleRegionFilter}
          >
            {regionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-slate-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-14 p-4 md:p-9">
          {filteredData.map((country) => (
            <div key={country.alpha3Code} className="bg-slate-600 text-white rounded">
              <img
                src={country.flag}
                alt={country.name}
                className="h-48 w-full object-cover rounded"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{country.name}</h2>
                <p className="text-sm">
                  <strong>Population:</strong> {country.population}
                </p>
                <p className="text-sm">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="text-sm">
                  <strong>Capital:</strong> {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;