import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map, publishReplay, refCount } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class JokeApisService {
    httpOptions = {
        headers: new HttpHeaders({
            'x-rapidapi-host': 'joke3.p.rapidapi.com',
            'x-rapidapi-key': 'be2b3e0d7cmshb5ad01829f9e0aep13bff7jsn4511e33d557e'
        })
    };
    constructor(private http: HttpClient) { }
    configs: Observable<any>;
    theApi: string = 'https://joke3.p.rapidapi.com/v1/joke';

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

    tryJokeActions(type: string, id?: string, upvote?: boolean, downvote?: boolean) {
        const jokeId = id ? ('/' + id) : '';
        const upVote = upvote ? '/upvote' : '';
        const downVote = downvote ? '/downvote' : '';
        const url = this.theApi + `${jokeId}` + upVote + downVote;

        if (type === 'get') {
            return this.http.get(url, this.httpOptions).pipe(delay(200), catchError(this.handleError));
        } else if (type === 'post') {
            return this.http.post(url, {}, this.httpOptions).pipe(catchError(this.handleError));
        }
    }

    submitJoke(theJoke) {
        const params = {
            content: theJoke,
            nsfw: false
        };
        return this.http.post(this.theApi, params, this.httpOptions).pipe(catchError(this.handleError));
    }

    // front end caching example
    randomJokeWithCaching(type: string, id?: string, upvote?: boolean, downvote?: boolean) {
        const jokeId = id ? ('/' + id) : '';
        const upVote = upvote ? '/upvote' : '';
        const downVote = downvote ? '/downvote' : '';
        const url = this.theApi + `${jokeId}` + upVote + downVote;

        if (type === 'get') {
            if (!this.configs) {
                this.configs = this.http.get(url, this.httpOptions)
                    .pipe(publishReplay(1), // this tells Rx to cache the latest emitted
                        refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
                        catchError(this.handleError));
            }
            return this.configs;
        }
    }

    // Clear configs
    clearCache() {
        this.configs = null;
        alert('Cache removed !!!');
    }
}
