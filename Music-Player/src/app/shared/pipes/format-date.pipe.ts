import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);

    const getDate = date.toLocaleDateString();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${getDate} ${hours}:${minutes}`;
  }
}
