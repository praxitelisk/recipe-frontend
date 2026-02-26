import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from './Ingredients.model'; // Πρόσεξε να είναι ίδιο με το όνομα του αρχείου σου

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  // Η διεύθυνση του Spring Boot API που φτιάξαμε
  private apiUrl = 'http://localhost:8080/api/ingredients';

  constructor(private http: HttpClient) { }

  // Μέθοδος για να παίρνουμε τη λίστα των υλικών
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }
}