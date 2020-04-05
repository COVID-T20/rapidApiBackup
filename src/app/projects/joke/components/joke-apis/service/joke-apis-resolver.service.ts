import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JokeApisService } from './joke-apis.service';

@Injectable({
    providedIn: 'root'
})

export class JokeApisResolverService implements Resolve<any>{
    constructor(private jokeApisService: JokeApisService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        /* only if the user selects Random Joke, the api will be fired to get data before
           navigating to Random Joke page with resolver service. For others the resolver simply returns
           (for resolver error handling code, please refer to "user-resolver.service.ts")
        */
        const jokeId = route.params.id;
        if (jokeId === 'randomJoke') {
            return this.jokeApisService.randomJokeWithCaching('get');
        } else {
            return;
        }
    }

}