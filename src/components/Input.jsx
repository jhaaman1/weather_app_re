import React from "react";
import LocationButton from "./LocationButton";

const Input = ({ handlesubmit, setInput, input, handlelocation }) => {
  return (
    <form>
      <div className="input-group mb-4 w-75 mx-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search City"
          aria-label="Search City"
          aria-describedby="basic-addon2"
          name="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button
          className="input-group-text"
          id="basic-addon2"
          onClick={handlesubmit}
        >
          <i className="fas fa-search"></i>
        </button>
        
      </div>
    </form>
  );
};

export default Input;
