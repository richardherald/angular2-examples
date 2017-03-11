import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { TaskComponent }  from './todo/task.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCz7kugPPNI24kcVjjNTO4HiGpqKDvn8J0',
  authDomain: 'todofabricadecodigo-c6949.firebaseapp.com',
  databaseURL: 'https://todofabricadecodigo-c6949.firebaseio.com',
  storageBucket: 'todofabricadecodigo-c6949.appspot.com',
  messagingSenderId: '902107944829'
};

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, TaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
