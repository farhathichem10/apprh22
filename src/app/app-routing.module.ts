import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addprod',
    loadChildren: () => import('./addprod/addprod.module').then( m => m.AddprodPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'editprod/:id',
    loadChildren: () => import('./editprod/editprod.module').then( m => m.EditprodPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'administrationrh',
    loadChildren: () => import('./administrationrh/administrationrh.module').then( m => m.AdministrationrhPageModule)
  },
  {
    path: 'attestation',
    loadChildren: () => import('./attestation/attestation.module').then( m => m.AttestationPageModule)
  },
  {
    path: 'autorisation',
    loadChildren: () => import('./autorisation/autorisation.module').then( m => m.AutorisationPageModule)
  },
  {
    path: 'congee',
    loadChildren: () => import('./congee/congee.module').then( m => m.CongeePageModule)
  },
  {
    path: 'mission',
    loadChildren: () => import('./mission/mission.module').then( m => m.MissionPageModule)
  },
  {
    path: 'demandemission',
    loadChildren: () => import('./demandemission/demandemission.module').then( m => m.DemandemissionPageModule)
  },
  {
    path: 'mesmission',
    loadChildren: () => import('./mesmission/mesmission.module').then( m => m.MesmissionPageModule)
  },
  {
    path: 'mesattestation',
    loadChildren: () => import('./mesattestation/mesattestation.module').then( m => m.MesattestationPageModule)
  },
  {
    path: 'demandeattestation',
    loadChildren: () => import('./demandeattestation/demandeattestation.module').then( m => m.DemandeattestationPageModule)
  },
  {
    path: 'addprod2',
    loadChildren: () => import('./addprod2/addprod2.module').then( m => m.Addprod2PageModule)
  },
  {
    path: 'demandeautorisation',
    loadChildren: () => import('./demandeautorisation/demandeautorisation.module').then( m => m.DemandeautorisationPageModule)
  },
  {
    path: 'mesautorisation',
    loadChildren: () => import('./mesautorisation/mesautorisation.module').then( m => m.MesautorisationPageModule)
  },
  {
    path: 'soldecongee',
    loadChildren: () => import('./soldecongee/soldecongee.module').then( m => m.SoldecongeePageModule)
  },
  {
    path: 'demandecongee',
    loadChildren: () => import('./demandecongee/demandecongee.module').then( m => m.DemandecongeePageModule)
  },
  {
    path: 'mescongee',
    loadChildren: () => import('./mescongee/mescongee.module').then( m => m.MescongeePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
