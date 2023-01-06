import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/shared/shared.module";
import { HomePageRoutingModule } from "./home-page-router-module";
import { HomePageComponent } from "./home-page.component";


@NgModule({
    declarations:[
        HomePageComponent
    ],
    imports:[
        CommonModule,
        HomePageRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule
    ],
    providers:[]
})
export class HomePageModule { }