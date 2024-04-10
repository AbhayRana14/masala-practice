import { Flavour } from "@/app/db/models/Flavour";

export const FlavourModuleResolver = {
  Query: {
    Flavour: async () => await Flavour.find({}),
    GetFlavourById: async (id: string) => await Flavour.findById(id),
  },
};
