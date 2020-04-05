import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../core/service/shared.service';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html'
})

export class ProjectsComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

    ngOnInit() {
        this.activatedRoute.data
            .subscribe(data => {
                this.sharedService.setUserData(data.userDate);
            });
    }
}