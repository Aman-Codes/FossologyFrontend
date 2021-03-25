import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './page/browse/browse.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';


@NgModule({
  declarations: [BrowseComponent, SpinnerComponent],
  imports: [
    BrowseRoutingModule,
    CommonModule,
    DataTablesModule
  ]
})
export class BrowseModule { }
