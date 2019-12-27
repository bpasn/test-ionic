import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detall',
  templateUrl: './detall.page.html',
  styleUrls: ['./detall.page.scss'],
})
export class DetallPage implements OnInit {
  data: any;
  groups:Array<{name:string}>=[];
  constructor(public alertController: AlertController,private route: ActivatedRoute,private router: Router, ) { 
    this.route.queryParams.subscribe(params =>{
      console.log('params: ' , params);
      if (params && params.special){
        this.data =JSON.parse,params;
      }
    });
    this.groups.push({name:'Ios'});
    this.groups.push({name:'Android'});
  
    
  }
showName(item: { name: any; }){
  alert(item.name);
}
  ngOnInit() {
  }
go (){
  this.router.navigate (['home']);
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
}
