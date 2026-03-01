import { HOST_TAG_NAME } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from '../app/components/contact/contact';



import { FoodList } from './components/food-list/food-list'; // Πρόσθεσε αυτό

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'catalog', component: FoodList }, // Βάλε το FoodListComponent εδώ, ΟΧΙ το App
  { path: 'contact', component: Contact }   // Η νέα σου σελίδα
];
