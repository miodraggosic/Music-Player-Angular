import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SearchComponent } from './components/search/search.component';

import { FullNamePipe } from './pipes/full-name.pipe';
import { TextLengthPipe } from './pipes/text-length.pipe';

const COMPONENTS = [SearchComponent, FullNamePipe, TextLengthPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [...COMPONENTS],
})
export class SharedModule {}
