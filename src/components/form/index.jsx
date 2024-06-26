import React, { useState } from "react";
import BankCards from "../bankCard/index.tsx";
import NumberInputFilter from "../input/index.jsx";
import components from "../database/index.tsx";
import SortSwitch from "../sortSwitch/index.jsx";
 import ShareWithFriends from "../shareOpt/index.jsx";

export default function BankForm() {

  const parametersObj = {};
  if (window.location.search !="") {
    const str = window.location.search;
     const params = ["sort", "filter"];
  let regexp;
for (let i = 0; i < params.length; i++){
    regexp = `[\\?&]${params[i]}=([^&#]*)`;
       parametersObj[params[i]] = str.match(regexp)[1]
    }
  }
  
  const [sort, setSort] = parametersObj.sort ? useState(parametersObj.sort) : useState(false);
  const [filter, setFilter] = parametersObj.filter ? useState(parametersObj.filter) : useState(0);

  console.log(sort)
  return (
    <div
      style={{
        width: "350px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
      }}
    >
      <NumberInputFilter filter={filter} onChange={setFilter} />
      <SortSwitch sort={sort} onChange={setSort} />
      <BankCards products={components.products} sort={sort} filtered={filter} />
      <ShareWithFriends toSort={sort} filter={filter} />
    </div>
  );
}
