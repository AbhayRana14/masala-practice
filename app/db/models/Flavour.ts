import * as mongoose from "mongoose";

const flavourSchema = new mongoose.Schema({
  price: { type: Number },
  title: { type: String },
  weight: { type: String },
  ingredients: { type: String },
  vegeterian: { type: Boolean },
  description: { type: Object },
  recipePoints: { type: Array },
  recipeCookingSteps: { type: Array },
});

flavourSchema.index({ "$**": "text" });
flavourSchema.index({ price: 1 });

export const Flavour = mongoose.models.Flavour || mongoose.model("Flavour", flavourSchema);
