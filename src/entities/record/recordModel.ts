import type { ICity } from "../city/cityModel";
import type { IDepartament } from "../departament/departamentModel";
import type { IShift } from "../shift/shiftModel";
import type { ITeam } from "../team/teamModel";
import type { IEmployee } from "../employee/employeeModel";

export interface IRecord {
  id: number
  employee: IEmployee
  departament: IDepartament
  team: ITeam
  shift: IShift
  city: ICity
}