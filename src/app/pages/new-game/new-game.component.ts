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
    users: this.formBuilder.array([this.formBuilder.control('')])
  });

  get users() {
    return this.userForm.get('users') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private gameService: GameService, private router: Router) {
  }

  addUser() {
    this.users.push(this.formBuilder.control(''));
  }

  onSubmit() {
    this.gameService.createGame(this.users.value)
      .subscribe((gameId) => {
        this.router.navigate(['/choose-tricks'],  { queryParams: { game: gameId, round: 1 } });
      })
  }
}
