import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/new-game', pathMatch: 'full'},
  {
    path: 'new-game',
    loadComponent: () => import('./pages/new-game/new-game.component').then(mod => mod.NewGameComponent)
  },
  {
    path: 'scoreboard',
    loadComponent: () => import('./pages/scoreboard/scoreboard.component').then(mod => mod.ScoreboardComponent)
  },
  {
    path: 'choose-tricks/:number',
    loadComponent: () => import('./pages/choose-tricks/choose-tricks.component').then(mod => mod.ChooseTricksComponent)
  },
  {
    path: 'actual-tricks/:number',
    loadComponent: () => import('./pages/actual-tricks/actual-tricks.component').then(mod => mod.ActualTricksComponent)
  },
];
