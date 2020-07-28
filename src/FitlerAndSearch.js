import React from "react";
export default function FSPLView(props, childrens) {
  const {
    config,
    doSingleSetFilter,
    selectedFilter,
    removeFilter,
    doMultiSetFilter,
    apiCallForMultiSelectFilter
  } = props;

  return (
    <>
      {config.dropdowns &&
        config.dropdowns.map(item => (
          <div key={item.field_name}>
            {" "}
            <label for="cars">{item.human_name}</label>
            <select
              name="cars"
              id="cars"
              onChange={e => {
                doSingleSetFilter(item.field_name, e.target.value, "dropdown");
              }}
            >
              {item.values.map((value, index) => (
                <option key={value || `${index}+item.field_name`} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
      {config.date_with_single_value &&
        config.date_with_single_value.map(item => (
          <div key={item.field_name}>
            <label for={item.human_name}>{item.human_name}</label>
            <input
              type="date"
              value={selectedFilter[item.field_name]?.value || ""}
              onChange={e => {
                doSingleSetFilter(
                  item.field_name,
                  e.target.value,
                  "date_with_single_value"
                );
              }}
              {...item.date_restrictions}
            />
          </div>
        ))}
      {config.date_with_multiple_value &&
        config.date_with_multiple_value.map(item => (
          <div key={item.field_name}>
            <form onSubmit={e => apiCallForMultiSelectFilter(e)}>
              <label for={item.human_name}>{item.human_name}</label>
              <div>
                start date
                <input
                  type="date"
                  // value={selectedFilter[item.field_name]?.start_value || ""}
                  onChange={e => {
                    doMultiSetFilter(
                      item.field_name,
                      { [item.start_value_field]: e.target.value },
                      {
                        [item.end_value_field]: selectedFilter[item.field_name]
                          ? selectedFilter[item.field_name][
                              item.end_value_field
                            ]
                          : ""
                      },
                      "date_with_multiple_value"
                    );
                  }}
                  {...item.date_restrictions}
                />
                end date
                <input
                  type="date"
                  // value={selectedFilter[item.field_name]?.end_value || ""}
                  onChange={e => {
                    doMultiSetFilter(
                      item.field_name,
                      {
                        [item.start_value_field]: selectedFilter[
                          item.field_name
                        ]
                          ? selectedFilter[item.field_name][
                              item.start_value_field
                            ]
                          : ""
                      },
                      { [item.end_value_field]: e.target.value },
                      "date_with_multiple_value"
                    );
                  }}
                  {...item.date_restrictions}
                />
                <input type="submit" />
              </div>
            </form>
          </div>
        ))}
      {Object.keys(selectedFilter).length > 0 && (
        <div>
          {Object.keys(selectedFilter).map(item => (
            <button onClick={() => removeFilter(item)}>
              {selectedFilter[item].value}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
