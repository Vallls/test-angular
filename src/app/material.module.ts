import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepper } from '@angular/cdk/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {CdkScrollable, ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatStepperModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatExpansionModule,
      MatDialogModule,
      MatTabsModule,
      MatTreeModule,
      MatSlideToggleModule,
      MatButtonToggleModule,
      ScrollingModule,
      MatCardModule,
      // MatAutocompleteModule
      MatProgressSpinnerModule,
      MatBadgeModule

   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatStepperModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatAutocompleteModule,
      MatExpansionModule,
      MatDialogModule,
      MatTabsModule,
      MatTreeModule,
      MatSlideToggleModule,
      MatButtonToggleModule,
      ScrollingModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatBadgeModule
   ],
   providers: [
      MatDatepickerModule,
      CdkStepper,
      CdkScrollable,
      {
         provide: MatDialogRef,
         useValue: {}
      },
      { provide: MAT_DIALOG_DATA, useValue: {} }
   ]
})

export class AngularMaterialModule { }
