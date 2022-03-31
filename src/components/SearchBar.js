import React from "react";

function SearchBar({ username, setUsername }) {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="searchbar">
      <input
        placeholder="Search"
        type="text"
        onChange={(event) => {
          onChange(event);
        }}
        onKeyUp={(event) => {
          onChange(event);
        }}
        onPaste={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
}

export default SearchBar;
