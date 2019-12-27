import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  go () {
    this.router.navigate(['home']);
  }
}
