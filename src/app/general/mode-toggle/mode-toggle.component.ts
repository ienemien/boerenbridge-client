import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ThemeService} from "../../services/theme.service";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'bbs-mode-toggle',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss'
})
export class ModeToggleComponent {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
