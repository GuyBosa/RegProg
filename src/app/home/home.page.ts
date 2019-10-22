import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController) {
  }

 
  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      console.log (data)
      // if (data.email && data.uid){
      //   this.toast.create({
      //     message: `Welcome to RegProg, ${data.email}`,
      //     duration: 3000
      //   });
      // }
      // else{
      //   this.toast.create({
      //     message: `Could not find user, ${data.email}`,
      //     duration: 3000
      //   });
      // }

    });
  }

}
