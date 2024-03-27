import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormArray, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {GameService} from "../../services/game.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'bbs-new-game',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatIconModule,
    ReactiveFormsModule, MatIconButton, NgForOf, MatButton,
    RouterModule,
  ],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.scss'
})
export class NewGameComponent {
  userForm = this.formBuilder.group({
    players: this.formBuilder.array([this.formBuilder.control('')])
  });

  get players() {
    return this.userForm.get('players') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private gameService: GameService, private router: Router) {
  }

  addPlayer() {
    this.players.push(this.formBuilder.control(''));
  }

  onSubmit() {
    this.gameService.createGame(this.players.value)
      .subscribe((gameId) => {
        this.router.navigate(['/choose-tricks'],  { queryParams: { game: gameId, round: 1 } });
      })
  }
}
