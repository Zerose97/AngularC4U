import { Component, OnInit } from '@angular/core';
import * as Spine from '@esotericsoftware/spine-player';
import { spineModels } from './model-demo';

@Component({
  selector: 'app-demo-spine',
  templateUrl: './demo-spine.component.html',
  styleUrls: ['./demo-spine.component.scss']
})
export class DemoSpineComponent implements OnInit {
  spineModels = spineModels;
  ngOnInit(): void {
    this.loadSpine(this.spineModels.layla);
  }

  loadSpine(model: any) {
    //remove
    const element = document.getElementById("player-container");
    element && element.remove();
    // add
    const div = document.createElement("div");
    div.style.width = "800px";
    div.style.height = "800px";
    div.setAttribute("id", 'player-container');;
    const main = document.getElementById("main");
    main && main.appendChild(div);
    new Spine.SpinePlayer("player-container", model);
  }
}
