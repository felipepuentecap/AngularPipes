import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'felipe';
  public nameUpper: string = 'FELIPE';
  public fullName: string = 'fElIpE pUEnTE';

  public customDate: Date = new Date();
}
