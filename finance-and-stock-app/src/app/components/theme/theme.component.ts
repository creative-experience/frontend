import { Component} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  selectedTheme: string | undefined;

  constructor() {
    this.selectedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
  }
  toggleTheme(isOtherTheme: boolean): void {
    this.selectedTheme = isOtherTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
    localStorage.setItem('selectedTheme', this.selectedTheme);
  }
}
