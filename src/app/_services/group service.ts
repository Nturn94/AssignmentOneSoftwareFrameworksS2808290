import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';
import { Groupgroup } from '@/_models/groups';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/groups`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/groups/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/groups/${id}`);
    }
}