import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-food-list',
  imports: [CommonModule],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})
export class FoodList implements OnInit {
  // Εδώ ορίζουμε τη λίστα που ψάχνει το HTML
  ingredients = signal<any[]>([]); // Ορισμός ως signal 

  // Κάνουμε inject το service
  constructor(private service: IngredientService) {}

  ngOnInit() {
    // Καλούμε τη Java μόλις ξεκινήσει η εφαρμογή
    this.service.getIngredients().subscribe({
      next: (data) => {
        this.ingredients.set(data); // Ενημέρωση του signal
        console.log('Ήρθαν τα δεδομένα:', data);
      },
      error: (err) => {
        console.error('Κάτι πήγε λάθος στη σύνδεση με τη Java:', err);
      }
    });
  }
}
