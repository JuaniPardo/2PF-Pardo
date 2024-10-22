import { Injectable } from '@angular/core';
import {Student} from "../models/student";
import {delay, Observable, of} from "rxjs";

let STUDENTS_DB: Student[] = [
  {
    id: 1,
    firstName: 'Martín',
    lastName: 'González',
    email: 'martin.gonzalez@example.com',
    isActive: true,
    dateOfBirth: new Date('1998-05-21'),
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-09-10')
  },
  {
    id: 2,
    firstName: 'Sofía',
    lastName: 'Rodríguez',
    email: 'sofia.rodriguez@example.com',
    isActive: false,
    dateOfBirth: new Date('1999-12-03'),
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-05-20')
  },
  {
    id: 3,
    firstName: 'Camila',
    lastName: 'Pérez',
    email: 'camila.perez@example.com',
    isActive: true,
    dateOfBirth: new Date('2000-07-14'),
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-07-25')
  },
  {
    id: 4,
    firstName: 'Lucas',
    lastName: 'Fernández',
    email: 'lucas.fernandez@example.com',
    isActive: true,
    dateOfBirth: new Date('1997-04-17'),
    createdAt: new Date('2023-04-10'),
    updatedAt: new Date('2023-06-08')
  },
  {
    id: 5,
    firstName: 'Valentina',
    lastName: 'López',
    email: 'valentina.lopez@example.com',
    isActive: false,
    dateOfBirth: new Date('1996-09-30'),
    createdAt: new Date('2023-03-21'),
    updatedAt: new Date('2023-07-03')
  },
  {
    id: 6,
    firstName: 'Joaquín',
    lastName: 'Martínez',
    email: 'joaquin.martinez@example.com',
    isActive: true,
    dateOfBirth: new Date('1995-11-12'),
    createdAt: new Date('2023-05-05'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: 7,
    firstName: 'Lucía',
    lastName: 'Sánchez',
    email: 'lucia.sanchez@example.com',
    isActive: false,
    dateOfBirth: new Date('1999-03-09'),
    createdAt: new Date('2023-07-22'),
    updatedAt: new Date('2023-09-05')
  },
  {
    id: 8,
    firstName: 'Emilio',
    lastName: 'Ruiz',
    email: 'emilio.ruiz@example.com',
    isActive: true,
    dateOfBirth: new Date('2001-01-30'),
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2023-08-11')
  },
  {
    id: 9,
    firstName: 'Carolina',
    lastName: 'Torres',
    email: 'carolina.torres@example.com',
    isActive: true,
    dateOfBirth: new Date('1998-10-25'),
    createdAt: new Date('2023-01-30'),
    updatedAt: new Date('2023-07-01')
  },
  {
    id: 10,
    firstName: 'Matías',
    lastName: 'Ramírez',
    email: 'matias.ramirez@example.com',
    isActive: false,
    dateOfBirth: new Date('1996-06-18'),
    createdAt: new Date('2023-03-14'),
    updatedAt: new Date('2023-05-30')
  }
];


function rndTime(r: number = 1000): number {
  return Math.floor(Math.random() * r * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(STUDENTS_DB).pipe(delay(rndTime(1)));
  }

  getActiveStudents(): Observable<Student[]> {
    STUDENTS_DB = STUDENTS_DB.filter(student => student.isActive);
    return of(STUDENTS_DB).pipe(delay(rndTime(1)));
  }

  deleteStudent(id: number): Observable<Student[]> {
    STUDENTS_DB = STUDENTS_DB.filter(student => student.id !== id);
    return of(STUDENTS_DB).pipe(delay(rndTime(.5)))
  }

  updateStudent(student: Student): Observable<Student[]> {
    STUDENTS_DB = STUDENTS_DB.map(s =>
      s.id === student.id ? student : s);
    return of(STUDENTS_DB).pipe(delay(rndTime(.5)));
  }

  getStudentById(id: number): Observable<Student | null> {
    const student: Student | null = STUDENTS_DB.find(s => s.id === id) || null;
    return of(student).pipe<Student | null>(delay(rndTime(1)));
  }

  createStudent(student: Student): Observable<Student[]> {
    STUDENTS_DB = [ ...STUDENTS_DB, { ...student, id: STUDENTS_DB.length + 1, isActive: true, createdAt: new Date(), updatedAt: new Date() }];
    return of(STUDENTS_DB).pipe(delay(rndTime(.7)));
  }
}
