import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonService } from './services/common.service';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'smooth-weather';

  commonService: CommonService = inject(CommonService);

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('GB');
    this.translateService.use(this.commonService.langSignal());
  }
}
