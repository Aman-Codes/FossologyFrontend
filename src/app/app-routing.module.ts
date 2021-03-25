import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
    import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    children: [
      {
        path: 'browse',
        loadChildren: () =>
          import('./modules/browse/browse.module').then(m => m.BrowseModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then(m => m.AboutModule)
      }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
