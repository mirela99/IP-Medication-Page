import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-medicamente',
  templateUrl:  './medicamente.component.html',
  styleUrls: ['./medicamente.component.css']

})
export class MedicamenteComponent {
  tip: any;
  ordonare: any;
  popularitate: any;
  substanta: any;
  zona: any;
  categorie: any;
  foods: Food[] = [
    {value: 'Cap-0', viewValue: 'Cap'},
    {value: 'Ochi-1', viewValue: 'Ochi'},
    {value: 'Gat-2', viewValue: 'Gat'},
    {value: 'Torace-3', viewValue: 'Torace'},
    {value: 'Inima-4', viewValue: 'Inima'}
  ];
}

