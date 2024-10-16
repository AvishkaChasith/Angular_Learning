import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  // DataTypes - string, number, boolean, Date, Object, null, undefined
  firstName:string="Angular Framework";
  AngularVersion ="version 17";
  currentVersion:number=18;
  isActive:boolean=false;
  currentDate:Date=new Date();
  inputTypes:string="checkbox";


}
