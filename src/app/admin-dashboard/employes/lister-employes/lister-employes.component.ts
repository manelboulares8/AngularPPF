import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from '../../../model/employe.model';
import { EmployeService } from '../../../services/employes.service';

@Component({
  selector: 'app-lister-employes',
  templateUrl: './lister-employes.component.html',
  styleUrls: ['./lister-employes.component.css']
})
export class ListerEmployesComponent {
  employees!: Employe[];

  constructor(private employeService: EmployeService, private router: Router) {
    this.employees = this.employeService.listeEmployes();
  }

  supprimerEmploye(em: Employe) {
    const conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.employeService.supprimerEmploye(em);
    }
  }

  updateEmploye(id: number) {
    // Vérifiez si id est bien un nombre avant de naviguer
    console.log('ID à modifier : ', id);
    if (id) {
      this.router.navigate(['/admin-dashboard/employes/update', id]);
    } else {
      console.error('ID invalide pour la mise à jour de l\'employé');
    }
  }
}
