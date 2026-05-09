import React from "react";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const RecipeGenerator = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Enter The Ingredients
        </FieldLabel>
        <Field orientation="horizontal" className="w-2xl ">
          <Input
            type="search"
            placeholder="Enter the Ingredients of the recipe you want!"
            className="h-10"
          />
        </Field>
      </div>
      <div>
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Enter Preferred Cuisine Type
        </FieldLabel>
        <Field orientation="horizontal" className="w-2xl ">
          <Input
            type="search"
            placeholder="Enter the preffered cuisine type!"
            className="h-10"
          />
        </Field>
      </div>
      <div>
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Any Allergies?
        </FieldLabel>
        <Field orientation="horizontal" className="w-2xl ">
          <Input
            type="search"
            placeholder="Enter the Allergies related to any food! (If Any)"
            className="h-10"
          />
        </Field>
      </div>
      <div>
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Recipe Type?
        </FieldLabel>
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select Type!" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="veg">Veg</SelectItem>
              <SelectItem value="nonVeg">Non-Veg</SelectItem>
              <SelectItem value="any">Any</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button className="h-10">Generate Recipe</Button>
    </div>
  );
};

export default RecipeGenerator;
