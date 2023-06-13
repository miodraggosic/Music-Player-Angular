import { Injectable } from '@angular/core';
import { SignUp, User } from '@models/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  private readonly storageId = 'userId';
  private readonly storageToken = 'userToken';
  private readonly storageRole = 'userRole';

  constructor() {}

  storeUser(res: any): void {
    this.setKey(this.storageId, res.user.id);
    this.setKey(this.storageToken, res.accessToken);
    this.setKey(this.storageRole, res.user.role);
  }
  removeUser(): void {
    this.removeKey(this.storageId);
    this.removeKey(this.storageToken);
    this.removeKey(this.storageRole);
  }

  getUserId(): string {
    return this.getKey(this.storageRole);
  }
  getUserToken(): string {
    return this.getKey(this.storageToken);
  }
  getUserRole(): string {
    return this.getKey(this.storageRole);
  }

  createUser(user: SignUp): User {
    const userToRegister: User = {
      fullName: `${user.firstName} ${user.lastName}`,
      createdAt: new Date().toISOString(),
      email: user.email,
      password: user.password,
      role: user.role,
    };
    return userToRegister;
  }

  private setKey(key: string, value: string): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  private getKey(key: string): string {
    return JSON.parse(window.localStorage.getItem(key) as string);
  }
  private removeKey(key: string): void {
    window.localStorage.removeItem(key);
  }
}
