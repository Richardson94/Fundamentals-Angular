import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class canFlyPipe implements PipeTransform {
  transform(value: boolean): 'Fly' | 'No Fly' {
    return value ? 'Fly' : 'No Fly';
  }
}
