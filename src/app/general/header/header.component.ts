import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ModeToggleComponent} from "../mode-toggle/mode-toggle.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'bbs-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    ModeToggleComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  resetGame(): void {
    // todo: ask for confirmation and reset game
    alert('Not implemented yet');
  }

}
