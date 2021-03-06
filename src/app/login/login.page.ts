import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;

  constructor( private router : Router, private afAuth: AngularFireAuth, public navCtrl: NavController
     ) { }

  ngOnInit() {
  }

  async login(user: User) {
    try{
     const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     if (result) {
      this.navCtrl.navigateRoot('home');
     }
     else {

     }
     console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

  register() {
    // this.navCtrl.navigateForward('RegisterPage')
    this.router.navigateByUrl('register');
  }

}
