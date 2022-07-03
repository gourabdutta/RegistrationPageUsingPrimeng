import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from 'src/assets/Models/City';
import { Employee } from 'src/assets/Models/Employee';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  emp=new Employee();
  public cities: City[];

  registerform = new FormGroup(
    {
    firstname: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormControl(""),
    dob: new FormControl(""),
    city:new FormControl(""),
    gender:new FormControl("")
  });
//
city: string;

    selectedCategory: any = null;

    categories: any[] = [
      {name: 'Male', value: 'M'}, 
      {name: 'Female', value: 'F'}
    ];
//
  constructor() { 
    this.cities = [
      { name: 'New York', value: 'NY' },
      { name: 'Rome', value: 'RM' },
      { name: 'London', value: 'LDN' },
      { name: 'Istanbul', value: 'IST' },
      { name: 'Paris', value: 'PRS' }
    ];
  }

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }
  OnSave(emp1:Employee):void
  {
    console.log(emp1);
  }

}
