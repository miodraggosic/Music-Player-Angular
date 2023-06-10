import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '@models/interfaces/song.interface';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: Author): string {
    return `${value.name} ${value.lastName}`;
  }
}
