import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SearchComponent } from './components/search/search.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';

import { FullNamePipe } from './pipes/full-name.pipe';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';

const COMPONENTS = [
  SearchComponent,
  TitleComponent,
  ButtonComponent,
  FullNamePipe,
  TextLengthPipe,
  FormatDatePipe,
];

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
