import { Component } from "@angular/core";
import { NavigationService } from "../../../app/features/services/navigation-service.service";

@Component({
  selector: "app-button-go-back",
  templateUrl: "./button-go-back.component.html",
  styleUrls: ["./button-go-back.component.scss"],
})
export class ButtonGoBackComponent {
  constructor(public navigation: NavigationService) {} 
  
}
