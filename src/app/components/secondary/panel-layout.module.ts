import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { PanelLayoutRoutes } from './panel-layout.routing';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteBursaryComponent } from './components/delete-bursary/delete-bursary.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { PreviewBursaryComponent } from './components/preview-bursary/preview-bursary.component';

@NgModule({
  imports: [
    RouterModule.forChild(PanelLayoutRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularMultiSelectModule,
    CKEditorModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    EditBursaryComponent,
    AddBursaryComponent,
    BursariesComponent,
    DashboardComponent,
    ApplicantsComponent,
    ApplicantDetailsComponent,
    ProfileComponent,
    DeleteBursaryComponent,
    MessagingComponent,
    PreviewBursaryComponent
  ]
})
export class PanelLayoutModule { }
