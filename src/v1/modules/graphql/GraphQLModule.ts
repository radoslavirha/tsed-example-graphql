import {Inject, Module} from "@tsed/di";
import {ApolloServer} from "@tsed/apollo";
import {TypeGraphQLService} from "@tsed/typegraphql";
import {MyDataSource} from "./datasources/MyDataSource";
import {RecipeResolver} from "./recipes/RecipeResolver";

@Module({
  imports: [MyDataSource],
  graphql: {
    v1: {
      path: "/v1/",
      buildSchemaOptions: {
        resolvers: [RecipeResolver]
      }
    }
  }
})
export class GraphQLModule {
  @Inject()
  protected typeGraphQLService: TypeGraphQLService;

  private server?: ApolloServer;

  public $onReady(): void | Promise<void> {
    this.server = this.typeGraphQLService.get("v1");

    //  console.log("The server is here:", this.server)
  }
}
