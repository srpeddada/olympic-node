const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  date: {
    type: Array,
    required: true,
  },
   open: {
    type: Array,
    required: true,
  },
    high: {
    type: Array,
    required: true,
  },
     low: {
    type: Array,
    required: true,
  },
      close: {
    type: Array,
    required: true,
  },
       adj_close: {
    type: Array,
    required: true,
  },
        volume: {
    type: Array,
    required: true,
  },
     

});
const data = mongoose.model("data", dataSchema);
module.exports = data;
