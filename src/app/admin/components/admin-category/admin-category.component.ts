import { CategoryService } from './../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  category;
  categories$;
  alreadyExists = false;
  constructor(private categoryService: CategoryService) { }
  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }
updateData(key, value) {
  this.categoryService.updateData(key, value);
}
  checkAndAdd() {
    if (this.category) {
          this.categoryService.saveData(this.category);

    }
  }

}
