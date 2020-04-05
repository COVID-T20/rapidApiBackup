import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { JokeComponent } from './joke/components/joke/joke.component';
import { JokeApisComponent } from './joke/components/joke-apis/joke-apis.component';



@NgModule({
    declarations: [
        ProjectsComponent,
        JokeComponent,
        JokeApisComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ProjectsComponent,
        JokeComponent,
        JokeApisComponent
    ]
})

export class ProjectsModule { }