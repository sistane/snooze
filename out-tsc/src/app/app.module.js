import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatRippleModule, MatSliderModule, MatToolbarModule, MatTooltipModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatInputModule, MatFormFieldModule, MatGridListModule, } from '@angular/material';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatCardModule,
            MatDialogModule,
            MatDividerModule,
            MatExpansionModule,
            MatIconModule,
            MatMenuModule,
            MatProgressBarModule,
            MatRippleModule,
            MatSliderModule,
            MatToolbarModule,
            MatTooltipModule,
            MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
            MAT_SNACK_BAR_DEFAULT_OPTIONS,
            MatInputModule,
            MatFormFieldModule,
            MatGridListModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map