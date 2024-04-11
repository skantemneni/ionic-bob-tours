import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor() {};

  tours = [
    {ID: 1, Title: "City Walk"},
    {ID: 2, Title: "On the trails of Beethoven"},
    {ID: 3, Title: "Villa Hammesmidth"},
  ]

  ngOnInit() {
  }

}
