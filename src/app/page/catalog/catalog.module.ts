import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/core/layout/layout.module';



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ]
})
export class CatalogModule { }
