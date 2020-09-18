import React from "react";

export default function Search() {
  return(
    <div className="Search">
      <form>
        <input type="submit" value="v" />
        <input type="search" placeholder="Enter a location..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
