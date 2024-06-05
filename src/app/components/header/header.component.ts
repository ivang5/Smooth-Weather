import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  commonService: CommonService = inject(CommonService);
  countries: string[] = ['GB', 'RS'];

  selectedCountry: string = this.commonService.langSignal();

  constructor(private translateService: TranslateService) {
    console.log(this.selectedCountry);
  }

  toggleTheme() {
    this.commonService.updateTheme();
  }

  onChange(event: any) {
    this.commonService.updateLang(event.value);
    this.translateService.use(event.value);
  }
}
