import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Courses } from './courses/courses';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path:'', component: Home},
    { path:'about', component: About },
    { path:'courses', component: Courses },
    { path:'contact', component: Contact },
    { path:'notfound', component: Notfound }
];
