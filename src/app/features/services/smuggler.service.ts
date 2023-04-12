/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from "@angular/core";
import { ISmuggler } from "../interfaces/ISmuggler";
import { SmugglerList } from "src/app/features/models/smuggler-list";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SmugglerService {
  smugglerList: ISmuggler[] = SmugglerList;

  public getAllSmugglers() {
    return this.smugglerList;
  }

  public getSmugglersById(id: number): Observable<ISmuggler> {
    const smuggler = this.smugglerList.find((s) => s.id == id)!;
    return of (smuggler);
  }

  // public getTeams(playerId: number): string[] {
  //   const player: IPlayer | undefined = PlayerList.find(
  //     (p) => p.id === playerId
  //   );
  //   return player ? player.team : [];
  // }

  // public getPlayerYears(id: number): number[] {
  //   const player = this.playerList.find((p) => p.id === id);
  //   if (player) {
  //     return player.years;
  //   }
  //   return [];
  // }

  // public getPlayerLogos = (playerId: number): string[] => {
  //   const player = PlayerList.find((player) => player.id === playerId);
  //   if (player) {
  //     return player.logo;
  //   }
  //   return [];
  // };

  
}
