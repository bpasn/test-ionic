import { AnimalPage } from './../animal/animal.page';
import { Routes, Router, NavigationExtras } from '@angular/router';
import { DetallPage } from './../detall/detall.page';
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular'; 
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 


  constructor(public alertController: AlertController,private router: Router) {}
onTuTest() {
  let navigationExtras: NavigationExtras ={
    queryParams :{
      special: 'whateveee'
    }

  }
  this.router.navigate(['detall'],navigationExtras);
}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'Test ionic cordova ',
    buttons: ['OK']
  });

  await alert.present();

}
go () {
  this.router.navigate(['animal']);
}
}


