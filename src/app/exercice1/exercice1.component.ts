import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public myText: string = "Hello World";
  public imageSrc: string =
    "https://images.stockfreeimages.com/461/sfixl/4617973.jpg";
  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    console.log("On a cliqué sur le bouton");
  }
}
