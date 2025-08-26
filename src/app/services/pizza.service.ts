import { Injectable } from '@angular/core';
import { Pizza } from '../models/order.model';

export type PizzaCategory = 'vegetarian' | 'meat' | 'spicy';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas: Pizza[] = [
    {
      id: 1,
      nameKey: 'pizzas.0.name',
      descriptionKey: 'pizzas.0.description',
      price: 150,
      currency: '₴',
      image: 'assets/img/margarita.jpg',
      popular: true,
      category: 'vegetarian'
    },
    {
      id: 2,
      nameKey: 'pizzas.1.name',
      descriptionKey: 'pizzas.1.description',
      price: 180,
      currency: '₴',
      image: 'assets/img/pepperoni.jpg',
      popular: true,
      category: 'meat'
    },
    {
      id: 3,
      nameKey: 'pizzas.2.name',
      descriptionKey: 'pizzas.2.description',
      price: 170,
      currency: '₴',
      image: 'assets/img/hawaiian.jpg',
      popular: false,
      category: 'meat'
    },
    {
      id: 4,
      nameKey: 'pizzas.3.name',
      descriptionKey: 'pizzas.3.description',
      price: 190,
      currency: '₴',
      image: 'assets/img/fourcheese.jpg',
      popular: true,
      category: 'vegetarian'
    },
    {
      id: 5,
      nameKey: 'pizzas.4.name',
      descriptionKey: 'pizzas.4.description',
      price: 160,
      currency: '₴',
      image: 'assets/img/vegetarian.jpg',
      popular: false,
      category: 'vegetarian'
    }
  ];

  getPizzas(): Pizza[] {
    return [...this.pizzas];
  }

  getPizzaById(id: number): Pizza | undefined {
    return this.pizzas.find(p => p.id === id);
  }

  getPizzasByCategory(category: PizzaCategory): Pizza[] {
    return this.pizzas.filter(p => p.category === category);
  }

  getPopularPizzas(): Pizza[] {
    return this.pizzas.filter(p => p.popular);
  }

  getCategories(): PizzaCategory[] {
    return ['vegetarian', 'meat', 'spicy'];
  }
}
