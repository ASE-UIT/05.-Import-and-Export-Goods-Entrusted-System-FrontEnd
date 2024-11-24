export type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  position: string;
  dob: string;
  coefficientSalary: number;
  baseSalary: number;
};

export type Role = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  username: string;
  role: Role;
  employee: Employee;
};
