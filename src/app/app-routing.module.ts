import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StartComponent} from './start/start.component';
import {ThankyouComponent} from './thankyou/thankyou.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'start', component: StartComponent },
    { path: 'thankyou', component: ThankyouComponent}
]

@NgModule({
   imports: [
       RouterModule.forRoot(appRoutes)
   ],
   exports: [
       RouterModule
   ]
})
export class AppRoutingModule {

}