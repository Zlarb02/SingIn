import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomepageModule,
    CatalogModule,
    RouterModule
  ],
  exports: [
    HomepageModule,
    CatalogModule,
  ]
})

export class PageModule { }
