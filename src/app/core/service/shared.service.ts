import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private userData: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private http: HttpClient) { }

    setUserData(data) {
        this.userData.next(data);
    }
    getUserData(): Observable<any> {
        return this.userData.asObservable();
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    userService() {
        const url = 'https://reqres.in/api/users/2';
        return this.http.get(url).pipe(catchError(this.handleError));
    }
}