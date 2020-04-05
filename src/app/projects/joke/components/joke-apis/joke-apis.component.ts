import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JokeApisService } from './service/joke-apis.service';
import { JokeApisModel } from './model/joke-apis.model';
import { map, concatMap, mergeMap, delay } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'joke-apis',
    templateUrl: './joke-apis.component.html',
})

/*
    concatMap : 1) This works for pure sequential API calls. Only when first API subscription is completely
                   finished, next API call get subscribed.
                2) If any API fails, rest of the subsequent API calls will be suspended & error will thrown
                   inside subscriber
                3) If total 3 sequential API call is there & 2nd one fails, still 1st API response will be available instantly.
    mergeMap :  1) This works for asynchronous API calls. Starts emitting responses whenever any
                   one API call completes. If one fails, still completed one will emit response. But in below example 
                   mergeMap is used to do sequestial API calls. So mergeMap & cancatMap is working almost in same manner.
                2) If total 3 sequential API call is there & 2nd one fails, still 1st API response will be available instantly.
    forkJoin :  1) This works for asynchronous API calls. Provide response only when all API
                   calls are completed.
                2) If one fails, complete subscription will fail.
                3) If total 3 sequential API call is there & 2nd one fails, all of them will fail.
*/

export class JokeApisComponent implements OnInit {
    loading: boolean = false;
    apiTitle: string = '';
    jokeAction: string = '';
    randomJoke: any = {};
    concatMapJokeApi: any = {};
    concatMapUpVoteApi: any = {};
    concatMapDownVoteApi: any = {};
    forkJoinJokeApi: any = {};
    forkJoinUpVoteApi: any = {};
    forkJoinDownVoteApi: any = {};
    mergeMapJokeApi: any = {};
    mergeMapUpVoteApi: any = {};
    mergeMapDownVoteApi: any = {};
    concatMapCompleted: boolean = false;
    forkJoinCompleted: boolean = false;
    mergeMapCompleted: boolean = false;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private jokeApisService: JokeApisService) { }

    ngOnInit() {
        this.activatedRoute.paramMap
            .subscribe(params => {
                const currentUrl = params.get('id');
                this.trackJokeUrl(currentUrl);
            });
        this.activatedRoute.data
            .subscribe(data => {
                this.populateJoke(data.jokeData);
            });
    }

    clearCache() {
        this.jokeApisService.clearCache();
    }

    trackJokeUrl(result: any) {
        const url = result;

        switch (url) {
            case 'randomJoke':
                this.jokeAction = 'randomJoke';
                this.apiTitle = 'Get a random Joke';
                break;

            case 'submitJoke':
                this.jokeAction = 'submitJoke';
                this.apiTitle = 'Submit a Joke';
                break;

        }
    }

    tryJokeActions(type, id = '', upVote = false, downVote = false) {
        this.loading = true;
        this.jokeApisService.tryJokeActions(type, id, upVote, downVote)
            .subscribe((res: JokeApisModel) => {
                if (res) {
                    this.populateJoke(res);
                    this.loading = false;
                } else {
                    this.errorStatement();
                }
            }, error => {
                this.errorStatement();
            });
    }

    submitJoke(theJoke) {
        this.jokeApisService.submitJoke(theJoke)
            .subscribe(res => {
                console.log(res);
            }, error => {
                console.log(error);
            });
    }

    populateJoke(apiData) {
        this.randomJoke.randomJokeId = apiData.id;
        this.randomJoke.randomJokeBody = apiData.content;
        this.randomJoke.randomJokeUpvote = apiData.upvotes;
        this.randomJoke.randomJokeDownvote = apiData.downvotes;
    }

    errorStatement() {
        this.loading = false;
        this.randomJoke.randomJokeId = '000';
        this.randomJoke.randomJokeBody = 'Some Error Occured !!!';
        this.randomJoke.randomJokeUpvote = 0;
        this.randomJoke.randomJokeDownvote = 0;
    }

    /* concatMap starts */

    concatMap() {
        this.concatMapCompleted = false;

        this.jokeApisService.tryJokeActions('get') // call 1st API
            .pipe(map(result => {
                this.showCMJokeApiData(result);
                return result;
            }),
                concatMap(randJoke => {
                    return this.jokeApisService.tryJokeActions('post', randJoke['id'], true, false); // call 2nd API
                }),
                concatMap(randJoke => {
                    this.showCMUpVoteApiData(randJoke);
                    return this.jokeApisService.tryJokeActions('post', randJoke['id'], false, true); // call 3rd API
                }),
            ).subscribe(res => {
                this.showCMDownVoteApiData(res);
                this.concatMapCompleted = true;
            }, error => {
                this.concatMapCompleted = true;
                console.log(error);
            });
    }

    showCMJokeApiData(result) {
        this.concatMapJokeApi.id = result.id;
        this.concatMapJokeApi.upVote = result.upvotes;
        this.concatMapJokeApi.downVote = result.downvotes;
    }
    showCMUpVoteApiData(result) {
        this.concatMapUpVoteApi.id = result.id;
        this.concatMapUpVoteApi.upVote = result.upvotes;
        this.concatMapUpVoteApi.downVote = result.downvotes;
    }
    showCMDownVoteApiData(result) {
        this.concatMapDownVoteApi.id = result.id;
        this.concatMapDownVoteApi.upVote = result.upvotes;
        this.concatMapDownVoteApi.downVote = result.downvotes;
    }

    /* concatMap ends */

    /* Promise Starts */

    promise() {
        this.concatMapCompleted = false;

        const promise = new Promise((resolve, reject) => {
            this.jokeApisService.tryJokeActions('get') // call 1st API
                .toPromise()
                .then(result => {
                    this.showCMJokeApiData(result);
                    this.jokeApisService.tryJokeActions('post', result['id'], true, false) // call 2nd API
                        .toPromise()
                        .then(res => {
                            this.showCMUpVoteApiData(res);
                            this.jokeApisService.tryJokeActions('post', res['id'], false, true) // call 3rd API
                                .toPromise()
                                .then(sol => {
                                    this.showCMDownVoteApiData(sol);
                                    this.concatMapCompleted = true;
                                    resolve();
                                }, error => {
                                    reject(error);
                                });
                        }, error => {
                            reject(error);
                        });
                }, error => {
                    reject(error);
                });
        });
    }
    /* Promise Ends */

    /* asyncAwait Starts */

    async asyncAwait() {
        this.concatMapCompleted = false;

        const randomJoke = await this.jokeApisService.tryJokeActions('get').toPromise();
        this.showCMJokeApiData(randomJoke);

        const upVote = await this.jokeApisService.tryJokeActions('post', randomJoke['id'], true, false).toPromise();
        this.showCMUpVoteApiData(upVote);

        const downVote = await this.jokeApisService.tryJokeActions('post', randomJoke['id'], false, true).toPromise();
        this.showCMDownVoteApiData(downVote);

        this.concatMapCompleted = true;
    }
    /* asyncAwait Ends */

    /* forkJoin Starts */
    forkJoin() {
        this.forkJoinCompleted = false;

        let upVote;
        let downVote;
        this.jokeApisService.tryJokeActions('get')
            .subscribe(res => {
                this.showFJJokeApiData(res);
                upVote = this.jokeApisService.tryJokeActions('post', res['id'], true, false);
                downVote = this.jokeApisService.tryJokeActions('post', res['id'], false, true);

                forkJoin([upVote, downVote]).subscribe(combinedRes => {
                    const upVoteResult = combinedRes[0];
                    const downVoteResult = combinedRes[1];
                    this.showFJUpVoteApiData(upVoteResult);
                    this.showFJDownVoteApiData(downVoteResult);

                    this.forkJoinCompleted = true;
                }, error => {
                    this.forkJoinCompleted = true;
                    console.log(error);
                });
            });

    }

    showFJJokeApiData(result) {
        this.forkJoinJokeApi.id = result.id;
        this.forkJoinJokeApi.upVote = result.upvotes;
        this.forkJoinJokeApi.downVote = result.downvotes;
    }
    showFJUpVoteApiData(result) {
        this.forkJoinUpVoteApi.id = result.id;
        this.forkJoinUpVoteApi.upVote = result.upvotes;
        this.forkJoinUpVoteApi.downVote = result.downvotes;
    }
    showFJDownVoteApiData(result) {
        this.forkJoinDownVoteApi.id = result.id;
        this.forkJoinDownVoteApi.upVote = result.upvotes;
        this.forkJoinDownVoteApi.downVote = result.downvotes;
    }
    /* forkJoin ends */

    /* mergeMap starts */

    mergeMap() {
        this.mergeMapCompleted = false;

        this.jokeApisService.tryJokeActions('get') // call 1st API
            .pipe(map(result => {
                this.showMMJokeApiData(result);
                return result;
            }),
                mergeMap(randJoke => {
                    return this.jokeApisService.tryJokeActions('post', randJoke['id'], true, false); // call 2nd API
                }),
                mergeMap(randJoke => {
                    this.showMMUpVoteApiData(randJoke);
                    return this.jokeApisService.tryJokeActions('post', randJoke['id'], false, true); // call 3rd API
                }),
            ).subscribe(res => {
                this.showMMDownVoteApiData(res);
                this.mergeMapCompleted = true;
            }, error => {
                this.mergeMapCompleted = true;
                console.log(error);
            });
    }

    showMMJokeApiData(result) {
        this.mergeMapJokeApi.id = result.id;
        this.mergeMapJokeApi.upVote = result.upvotes;
        this.mergeMapJokeApi.downVote = result.downvotes;
    }
    showMMUpVoteApiData(result) {
        this.mergeMapUpVoteApi.id = result.id;
        this.mergeMapUpVoteApi.upVote = result.upvotes;
        this.mergeMapUpVoteApi.downVote = result.downvotes;
    }
    showMMDownVoteApiData(result) {
        this.mergeMapDownVoteApi.id = result.id;
        this.mergeMapDownVoteApi.upVote = result.upvotes;
        this.mergeMapDownVoteApi.downVote = result.downvotes;
    }

    /* mergeMap ends */

}
