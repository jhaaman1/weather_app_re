import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import axios from "axios";
import Input from "./Input";
import LocationButton from "./LocationButton";
import { toast } from "react-toastify";

const MainPage = () => {
  const [search, setSearch] = useState("patna");
  const [data, setData] = useState([]);
  const [forcastData, setForcastData] = useState([]);
  const [input, setInput] = useState("");

  const Api_key = "e18433587820ec5f7fc76d608d1fb4a7";

  const fetchWeather = () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?appid=${Api_key}&q=${search}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        // Call fetchforecast with latitude and longitude obtained from the response
        fetchforecast(res.data.coord.lat, res.data.coord.lon);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const fetchforecast = (lat, lon) => {
    console.log("qwert");
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Api_key}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setForcastData(res.data);
        toast.success(`Succesfully Fetch Weather for ${res.data.city.name}`);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  useEffect(() => {
    fetchWeather();
  }, [search]);

  console.log("first==>", data);
  console.log("first==>", forcastData);

  const handlesubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };
  const handlelocation = (city) => {
    setSearch(city);
  };
  return (
    <div className="">
      <div className="container mt-3">
        <div className="row  justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center">
              <img
                src="https://images.unsplash.com/photo-1550247196-08aff5de9427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <div className="d-flex justify-content-center alig-items-center">
                  <Input
                    handlesubmit={handlesubmit}
                    setInput={setInput}
                    input={input}
                    handlelocation={handlelocation}
                  />
                  <LocationButton handlelocation={handlelocation} />
                </div>
                <MainCard data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
