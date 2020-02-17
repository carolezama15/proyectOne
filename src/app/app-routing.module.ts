import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./tab1/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tab1/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },  {
    path: 'buscar-amigos',
    loadChildren: () => import('./tab2/buscar-amigos/buscar-amigos.module').then( m => m.BuscarAmigosPageModule)
  },
  {
    path: 'agregar-amigos',
    loadChildren: () => import('./tab2/agregar-amigos/agregar-amigos.module').then( m => m.AgregarAmigosPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./tab2/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'listado-amigos',
    loadChildren: () => import('./tab2/listado-amigos/listado-amigos.module').then( m => m.ListadoAmigosPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
