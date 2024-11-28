import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
 
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  allRecipes: any = [];
  allRecipesDummy: any = [];
  searchKey:string=""
  constructor(private api: ApiService) {}
  p:number=1;
  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipes = res;
      this.allRecipesDummy = this.allRecipes;
      console.log(this.allRecipes);
    });
  }
  filterRecipes(recipeType: string, recipeName: string) {
    this.allRecipes = this.allRecipesDummy.filter((item: any) =>
      item[recipeType]?.includes(recipeName)
    );
  }
}
