import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormArray, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Round} from "../../model/round";
import {Player} from "../../model/player";
import {ScoreService} from "../../services/score.service";

@Component({
  selector: 'bbs-choose-tricks',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatIconModule,
    ReactiveFormsModule, MatIconButton, NgForOf, MatButton,
    RouterModule, NgIf,
  ],
  templateUrl: './choose-tricks.component.html',
  styleUrl: './choose-tricks.component.scss'
})
export class ChooseTricksComponent implements OnInit {
  round?: Round;
  gameId?: string;
  dealerId: number = 0;

  chooseTricksForm = this.formBuilder.group({
    tricks: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private scoreService: ScoreService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.route.data.subscribe(({ round } : { round: Round}) => {
      this.round = round;
      for(const score of round.scores) {
        this.tricks.push(this.formBuilder.group({
          playerId: [score.player.id],
          playerName: [score.player.name],
          tricks: [],
        }));
      }
      const playerIndex = (this.round?.roundNumber ?? 1) % this.players.length;
      this.dealerId = this.players[playerIndex - 1].id;
    });
    this.route.queryParams.subscribe((params) => this.gameId = params['game']);
  }

  get tricks() {
    return this.chooseTricksForm.get('tricks') as FormArray;
  }

  get players(): Player[] {
    return this.round?.scores.map((score) => score.player) ?? [];
  }

  onSubmit() {
    if(this.gameId && this.round?.roundNumber) {
      this.scoreService.saveChosenTricks(this.gameId, this.round?.roundNumber, this.tricks.value).subscribe(() => {
        this.router.navigate(['/actual-tricks'],  { queryParams: { game: this.gameId, round: this.round?.roundNumber } });
      });
    }
  }
}
