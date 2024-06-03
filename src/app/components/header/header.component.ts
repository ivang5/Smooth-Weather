import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  commonService: CommonService = inject(CommonService);

  toggleTheme() {
    this.commonService.updateTheme();
  }
}
