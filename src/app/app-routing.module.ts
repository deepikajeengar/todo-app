import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FileComponent } from './file/file.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'card',
    component: CardComponent,
  },
  { 
    path: 'file',
    component: FileComponent,
  },
  { 
    path: 'form',
    component: FormComponent,
  },
  {
     path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
   component: HomeComponent,
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
