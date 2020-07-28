export default {
  api_action: function(filter) {
    console.log(filter);
  },

  dropdowns: [
    {
      field_name: "type_a",
      values: [undefined, "A", "B", "C", "D"],
      action: function(value) {
        console.log(value); //this function is used to convert to particular format if required
        return value;
      },
      human_name: "typeA"
    },
    {
      field_name: "type_b",
      values: [undefined, "AB", "CB", "CD", "DE"],
      action: function(value) {
        console.log(value);
      },
      human_name: "typeB"
    },
    {
      field_name: "typebe",
      values: [undefined, "A", "B", "C", "D"],
      action: function(value) {
        console.log(value);
      },
      human_name: "typebe"
    }
  ],
  searchFieldWithEnter: [
    {
      search_name: "email",
      action: function(value) {
        console.log(value);
      },
      human_name: "Please Enter Email"
    }
  ],
  searchFieldWithOutEnter: [
    {
      search_name: "email",
      action: function(value) {
        console.log(value);
      },
      human_name: "Please Enter Email",
      auto_complete_action: function(value) {
        console.log(value);
      },
      store_name: "someNAme"
    }
  ],
  date_with_single_value: [
    {
      field_name: "date_1",
      action: function(value) {
        console.log(value);
      },
      date_restriction: {}, //any date related config
      human_name: "Date 1"
    }
  ],
  date_with_multiple_value: [
    {
      start_value_field: "start_date",
      end_value_field: "end_date",
      field_name: "date_23",
      action: function(value) {
        console.log(value);
      },
      date_restriction: {}, //any date related config
      human_name: "Date 1"
    }
  ],
  sliderSingleValue: [{}],
  doubleSliderValue: [{}]
};
