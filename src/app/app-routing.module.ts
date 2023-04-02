import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [

  {path: 'contact', component:ContactComponent},
  {path: 'home', component:HomeComponent},
  {path: 'education', component:EducationComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'works', component:WorkComponent},
  {path: 'about', component:AboutComponent},
  {path: 'certificate', component:CertificateComponent},
 

 
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
