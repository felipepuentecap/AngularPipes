import { Pipe, PipeTransform } from '@angular/core';

// felipe | toggleCase = 'FEIPE'
// FELIPE | toggleCase = 'felipe'
@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
