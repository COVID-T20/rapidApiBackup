import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { SharedService } from './shared.service';

@Injectable({
    providedIn: 'root'
})

export class UserResolver implements Resolve<any> {
    constructor(private http: HttpClient,
        private router: Router,
        private sharedService: SharedService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.sharedService.userService()
            .pipe(delay(500),
                map(result => {
                    localStorage.setItem('userInfo', JSON.stringify(result));
                    return result;
                }),
                catchError(error => {
                    localStorage.removeItem('userInfo');
                    this.sharedService.setUserData(null);
                    this.router.navigate(['/error']);
                    const message = `Retrieval error: ${error}`;
                    return of({ userDate: null, error: message });
                }));
    }
}