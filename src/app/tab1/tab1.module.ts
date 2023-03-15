import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from '../pipes/custom.pipe';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Tab1Page,
    CustomPipe
  ],
  exports: [
    CustomPipe
  ]
})
export class Tab1PageModule {}
