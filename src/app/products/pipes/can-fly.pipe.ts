import { Pipe, PipeTransform } from '@angular/core';

// ture | canFly = 'Vuela'
// false | canFly = 'No vuela'
@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela' | 'No vuela' {
    return value ? 'Vuela' : 'No vuela';
  }
}
