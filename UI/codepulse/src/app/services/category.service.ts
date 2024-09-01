import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.baseUrl}/Categories`)
  }

  getCategorieById(id: string): Observable<Category>{
    return this.http.get<Category>(`${environment.baseUrl}/Categories/${id}`)
  }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(`${environment.baseUrl}/Categories`, model)
  }
}
