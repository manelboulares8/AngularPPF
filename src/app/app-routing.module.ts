import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListeCommandesComponent } from './admin-dashboard/commandes/liste-commandes/liste-commandes.component';
import { AjouterCommandeComponent } from './admin-dashboard/commandes/ajouter-commande/ajouter-commande.component';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, 
    children: [
      { path: 'commandes/liste', component: ListeCommandesComponent }, 
      { path: 'commandes/ajouter', component: AjouterCommandeComponent }, 
    ]
  } , 
  {
    path: 'caissier-dashboard',
    component: AdminDashboardComponent,
    canActivate: [RoleGuard],
    data: { role: 'caissier' }  // Protéger avec le rôle 'caissier'
  },
  { path: '**', redirectTo: '' }   // Liste des commandes // Redirige vers la page d'accueil pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
