import React from "react";
import "./styles.css";
import config from "./congif";
import WithFSPL from "./WithFSPL";
import Table from "./Table";
import FilterandSearch from "./FitlerAndSearch";
//passing table as argument because it can be layout

const FSPL = WithFSPL(FilterandSearch, Table, config);

export default function App() {
  return (
    <div className="App">
      <FSPL />
    </div>
  );
}
