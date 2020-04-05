import { ProjectsComponent } from './projects.component';
import { JokeComponent } from './joke/components/joke/joke.component';
import { JokeApisComponent } from './joke/components/joke-apis/joke-apis.component';
// services
import { UserResolver } from '../core/service/user-resolver.service';
import { JokeApisResolverService } from './joke/components/joke-apis/service/joke-apis-resolver.service';



export const ProjectsRouting = [
    { path: 'projects', component: ProjectsComponent, resolve: { userDate: UserResolver } },
    {
        path: 'joke',
        children: [
            { path: '', component: JokeComponent },
            { path: ':id', component: JokeApisComponent, resolve: { jokeData: JokeApisResolverService} }
        ]
    }
]