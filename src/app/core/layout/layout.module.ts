import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MetronomeComponent } from './metronome/metronome.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    MetronomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent
  ]
})
export class LayoutModule { }
