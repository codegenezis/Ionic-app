import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'About',
        loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'Home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path:'',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
