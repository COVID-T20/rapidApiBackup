import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from './core/service/shared.service';
import { Observable, Subject, of, from } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  userName: string;
  loading = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private sharedService: SharedService,
              private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.sharedService.getUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res) {
          const userData = res.data;
          this.userName = userData.first_name + ' ' + userData.last_name;
        } else {
          this.userName = '';
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
