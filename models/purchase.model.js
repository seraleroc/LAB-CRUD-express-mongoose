// ## Iteração 1: Crie os models `Album` e `Purchase`

// O modelo **`Purchase`** deve conter as seguintes propriedades:

// - `shippingAdress` - String
// - `album` - _ObjectID_ referente ao modelo do Album

import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
  shippingAddress: { type: String },
  album: { type: Schema.Types.ObjectId, ref: "Album" },
});

const purchaseModel = model("Purchase", purchaseSchema);

export default purchaseModel;
