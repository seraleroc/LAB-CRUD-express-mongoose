// ## Iteração 1: Crie os models `Album` e `Purchase`

// O modelo do **`Album`** deve conter as seguintes propriedades:

// - `performer` - String
// - `title` - String
// - `cost` - Number

import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  performer: { type: String },
  title: { type: String },
  cost: { type: Number },
});

const albumModel = model("Album", albumSchema);

export default albumModel;
