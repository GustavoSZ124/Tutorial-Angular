import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor() {}
}
