import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    UsersComponent,
    ReportsComponent,
    SettingsComponent,
    CampaignsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
