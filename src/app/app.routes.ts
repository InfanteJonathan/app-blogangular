import { Routes } from '@angular/router';
import { MainComponent } from './components/main/mainlist/mainlist.component';
import { PostcreateComponent } from './components/publicaciones/postcreate/postcreate.component';
import { ObtenerPostComponent } from './components/publicaciones/obtener-post/obtener-post.component';
import { PostEditComponent } from './components/publicaciones/post-edit/post-edit.component';
import { PostDeleteComponent } from './components/publicaciones/post-delete/post-delete.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    {path: '', component:MainComponent},
    {path: 'create', component: PostcreateComponent},
    {path: 'get/:id', component: ObtenerPostComponent},
    {path: 'edit/:id', component: PostEditComponent},
    {path: 'delete/:id', component: PostDeleteComponent},
    {path: 'login',component: LoginComponent}
];
