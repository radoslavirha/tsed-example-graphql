import {Service} from "@tsed/common";
import {Recipe} from "../modules/graphql/recipes/Recipe";

@Service()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe({
      id: "2",
      title: "V2",
      description: "V2 recipe",
      creationDate: new Date("2020-08-20"),
      ingredients: []
    })
  ];

  async findById(id: string) {
    return this.recipes.find((item) => item.id === id);
  }

  async findAll(options: any) {
    return this.recipes;
  }
}
