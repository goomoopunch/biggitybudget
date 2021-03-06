import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PayeeComponent } from './components/payee/payee.component';
import { AddPayeeComponent } from './components/payee/add-payee.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PayeeComponent,
        AddPayeeComponent,
        KeysPipe
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.        
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'payee', component: PayeeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
