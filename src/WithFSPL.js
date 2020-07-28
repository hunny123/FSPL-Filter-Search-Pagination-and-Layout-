import React, { useState } from "react";
import Pagination from "./Pagination";
export default function withFSPL(Componet1, LayoutComponet, config) {
  return function ComponentWithLogics(props) {
    //this can be used has both search_query and filter
    const [selectedFilter, setSelectedFilter] = useState({});
    const [multiSelectFilters, setMultiSelectedFilter] = useState({});
    // const [advanceFilter, seadvanceFilter] = useState({});

    const doSingleSetFilter = (field, value, type) => {
      const newFilterSelected = {
        ...selectedFilter,
        [field]: { value, type }
      };
      setSelectedFilter({ ...newFilterSelected });
      config.api_action({ ...newFilterSelected });
    };
    const doMultiSetFilter = (field, start_value, end_value, type) => {
      const newFilterSelected = {
        ...multiSelectFilters,
        [field]: { ...start_value, ...end_value, type }
      };
      console.log(newFilterSelected);
      setMultiSelectedFilter({ ...newFilterSelected });

      // config.api_action({ ...newFilterSelected });
    };
    const apiCallForMultiSelectFilter = e => {
      config.api_action({ ...selectedFilter, ...multiSelectFilters });
      e.preventDefault();
    };
    const removeFilter = field => {
      const newFilterSelected = { ...selectedFilter };
      delete newFilterSelected[field];
      setSelectedFilter({ ...newFilterSelected });
      config.api_action({ ...newFilterSelected });
    };
    const propsData = {
      ...props,
      selectedFilter: { ...selectedFilter },
      multiSelectFilters: { ...multiSelectFilters },
      // advanceFilter:{...advanceFilter},
      config: { ...config },
      doSingleSetFilter: doSingleSetFilter,
      doMultiSetFilter: doMultiSetFilter,
      removeFilter: removeFilter,
      apiCallForMultiSelectFilter
    };

    return (
      <>
        <Componet1 {...propsData} />
        <Pagination filter={selectedFilter} />
        <LayoutComponet {...propsData} />
      </>
    );
  };
}
