import {Component} from '@angular/core';
import {SHIFT} from "@angular/cdk/keycodes";

export interface EmployeeShift {
  date: string;
  shiftCodeId: number;
  code: string;
  shiftCodeDynamicValue: number;
  tickValue: boolean;
  value: number;
}

export interface StaffTimeSheetDto {
  employeeId: number;
  employeeName: string;
  shifts: EmployeeShift[];
}

const EMPLOYEE_DATA: StaffTimeSheetDto = {
  employeeId: 1001,
  employeeName: "Tom Mbambo",
  shifts: [
    {
      date: "01/01/2023",
      shiftCodeId: 1,
      code: "SH1",
      shiftCodeDynamicValue: 1,
      tickValue: true,
      value: 1,
    },
    {
      date: "02/01/2023",
      shiftCodeId: 2,
      code: "SH2",
      shiftCodeDynamicValue: 2,
      tickValue: true,
      value: 2,
    },
    {
      date: "03/01/2023",
      shiftCodeId: 3,
      code: "SH3",
      shiftCodeDynamicValue: 3,
      tickValue: true,
      value: 3,
    },
    {
      date: "04/01/2023",
      shiftCodeId: 4,
      code: "SH4",
      shiftCodeDynamicValue: 4,
      tickValue: true,
      value: 4,
    },
    {
      date: "05/01/2023",
      shiftCodeId: 5,
      code: "SH5",
      shiftCodeDynamicValue: 5,
      tickValue: true,
      value: 5,
    },
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tafuraa';
  dataSource = EMPLOYEE_DATA.shifts
  columns = EMPLOYEE_DATA.shifts
  displayedColumns = this.columns.map(col => col.code)
}
