import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
    { path: '', component: HomePageComponent }, //, canActivate: [AuthGuard]
    {
        path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule)
    },
    {
        path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
    },
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }