import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlayersModule { }
