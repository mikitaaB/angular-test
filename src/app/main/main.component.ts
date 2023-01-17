import { Component } from '@angular/core';
import { fas, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  totalIconPacks = [fas, far, fab];
  randIcon = this.getRandomIcon();
  isDisabledButton = false;

  getRandomIcon(): [prefix: IconPrefix, icon: IconName] {
    const randPackIndex = Math.floor(Math.random() * this.totalIconPacks.length);
    const randPack = this.totalIconPacks[randPackIndex];
    const randPackKeys = Object.keys(randPack);
    const randIcon = randPack[randPackKeys[Math.floor(Math.random() * randPackKeys.length)]]
    return [randIcon.prefix, randIcon.iconName];
  }

  onButtonClick(): void {
    this.isDisabledButton = true;
    setTimeout(() => {
      this.randIcon = this.getRandomIcon();
      this.isDisabledButton = false;
    }, 3000);
  }
}
