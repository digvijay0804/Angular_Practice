import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortPipe',
})
export class ShortPipePipe implements PipeTransform {
  transform(fullName: string): string {
  const names = fullName.split(' ');

  return names[0].charAt(0) + '.' + names[1] + '';
}
}
