import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  commonService: CommonService = inject(CommonService);

  constructor(private translateService: TranslateService) {}

  toggleTheme() {
    this.commonService.updateTheme();
  }

  changeLang(event: any) {
    const selectedLang = event.target.value;

    this.commonService.updateLang(selectedLang);
    this.translateService.use(selectedLang);
  }
}
