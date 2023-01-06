import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
// import { FontAwesomeModule } from @fortawesome/angular-FontAwesomeModule;


@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        // FontAwesomeModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule {}