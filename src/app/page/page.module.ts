import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { PlayersModule } from './players/players.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomepageModule,
    CatalogModule,
    PlayersModule,
    RouterModule
  ],
  exports: [
    HomepageModule,
    CatalogModule,
    PlayersModule
  ]
})

export class PageModule { }
