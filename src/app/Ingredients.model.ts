export interface Ingredient {
  id?: number;
  name: string;
  caloriesPer100g: number;
  unit: string;
  category: string; // Νέο
  price: number;    // Νέο
}