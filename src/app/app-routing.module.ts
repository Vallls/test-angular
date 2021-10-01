import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "./navigation/navbar/navbar.component";

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./modules/students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('./modules/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'teachers',
        loadChildren: () =>
          import('./modules/teachers/teachers.module').then(m => m.TeachersModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
