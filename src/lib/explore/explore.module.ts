import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
