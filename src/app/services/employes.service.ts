import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employees: Employe[] = [];

  constructor() {
    this.employees = [
      { idEmploye: 1, FullNameEmploye: "Nom Prenom 1", emailEmploye: "employe1@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("1996-12-04") },
      { idEmploye: 2, FullNameEmploye: "Nom Prenom 2", emailEmploye: "employe2@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("1996-12-04") },
      { idEmploye: 3, FullNameEmploye: "Nom Prenom 3", emailEmploye: "employe3@gmail.com", NumTelEmploye: 25147789, dateNaissanceEmploye: new Date("1996-12-04") },
    ];
  }

  // Retourne la liste des employés
  listeEmployes(): Employe[] {
    return [...this.employees]; // Retourne une copie pour éviter des modifications directes
  }

  // Ajoute un nouvel employé
  addEmploye(employe: Employe): void {
    employe.idEmploye = this.employees.length > 0
      ? Math.max(...this.employees.map(e => e.idEmploye)) + 1
      : 1;
    this.employees.push(employe);
    console.log('Nouvel employé ajouté :', employe);
  }

  // Supprime un employé
  supprimerEmploye(emp: Employe): void {
    const index = this.employees.findIndex(e => e.idEmploye === emp.idEmploye);
    if (index > -1) {
      this.employees.splice(index, 1);
      console.log(`Employé avec ID ${emp.idEmploye} supprimé.`);
    } else {
      console.warn("Employé introuvable pour suppression !");
    }
  }

  // Recherche un employé par ID
  consulterEmploye(id: number): Employe | null {
    const employe = this.employees.find(e => e.idEmploye === id) || null;
    if (!employe) {
      console.warn(`Aucun employé trouvé avec l'ID ${id}.`);
    }
    return employe;
  }

  // Met à jour un employé existant
  updateEmploye(em: Employe): void {
    const index = this.employees.findIndex(emp => emp.idEmploye === em.idEmploye);
    if (index !== -1) {
      this.employees[index] = { ...em };
      console.log(`Employé avec ID ${em.idEmploye} mis à jour.`);
    } else {
      console.warn("Employé introuvable pour mise à jour !");
    }
  }

  // Trie les employés par ID
  trierEmployes(): void {
    this.employees.sort((n1, n2) => n1.idEmploye! - n2.idEmploye!);
    console.log('Liste des employés triée par ID.');
  }
}
