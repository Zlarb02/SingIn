import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { LayoutModule } from 'src/app/core/layout/layout.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ]
})
export class CatalogModule { }
