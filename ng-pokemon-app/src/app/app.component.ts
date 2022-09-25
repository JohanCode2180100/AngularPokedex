import { Component } from "@angular/core"; // importation des elements que l on a besoin ICI le coeur d Angular

@Component({
  selector: "app-root",
  template: ` <!--The content below is only a placeholder and can be replaced.-->

    <h1>Welcome to {{ title }}!</h1>`,
})
export class AppComponent {
  title = "ng-pokemon-app";
}

