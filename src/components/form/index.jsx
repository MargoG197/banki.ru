import React, { useState } from "react";
import BankCards from "../bankCard/index.tsx";
import NumberInputFilter from "../input/index.jsx";
import components from "../database/index.tsx";
import SortSwitch from "../sortSwitch/index.jsx";
 import ShareWithFriends from "../shareOpt/index.jsx";

export default function BankForm() {
  ///////////////////////// ищем переданные через window.location.search параметры поиска,е сли они переданы
  ///////// и заносим эти параметры в объект из которого будем их доставать по мере необходимости
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
  ///////////////////////// используем стейт, чтобы отследить состояние, плюс если передавались параметры  в window.location.search
  ////////// в качестве первоначального значения
  const [sort, setSort] = parametersObj.sort ? useState(parametersObj.sort) : useState(false);
  const [filter, setFilter] = parametersObj.filter ? useState(parametersObj.filter) : useState(0);
/////////////////////////
  ///////// возвращаем все составляющие формы и передаем туда необходимые параметры включая состояния
  
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
