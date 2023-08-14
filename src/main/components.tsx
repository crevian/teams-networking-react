import { useState } from "react";
import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  const [search, setSearch] = useState("");
  console.warn("wrapper.render", search);

  return (
    <div id="main">
      <div className="tbar">
        <button id="removeSelected">✖ Remove selected</button>
        <div className="tfill"></div>
        <input
          type="search"
          name="search"
          id="searchTeams"
          placeholder="Search..."
          onChange={(e) => {
            console.info("search", e.target.value);
            // search = e.target.value;
            setSearch(e.target.value);
          }}
        />
        <label htmlFor="searchTeams">🔎</label>
      </div>

      <TeamsTableWrapper search={search} />
    </div>
  );
}
