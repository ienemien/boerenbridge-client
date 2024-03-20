import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {IconButton} from "../../model/icon-button";
import {filter, map} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'bbs-footer',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    RouterLink,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public iconButton?: IconButton;

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).url)
    ).subscribe((url) => {
        if (url === '/scoreboard') {
          this.iconButton = {
            icon: 'style',
            link: '/choose-tricks/1', //todo: set to current round/step
          }
        } else {
          this.iconButton = {
            icon: 'scoreboard',
            link: '/scoreboard',
          };
        }
      }
    );
  }
}
