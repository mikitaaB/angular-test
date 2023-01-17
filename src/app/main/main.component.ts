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
  delay = 3000;

  getRandomIndex(arrLength: number): number {
    return Math.floor(Math.random() * arrLength);
  }

  getRandomIcon(): [prefix: IconPrefix, icon: IconName] {
    const randPack = this.totalIconPacks[this.getRandomIndex(this.totalIconPacks.length)];
    const randPackKeys = Object.keys(randPack);
    const randIcon = randPack[randPackKeys[this.getRandomIndex(randPackKeys.length)]]
    return [randIcon.prefix, randIcon.iconName];
  }

  onButtonClick(): void {
    this.isDisabledButton = true;
    setTimeout(() => {
      this.randIcon = this.getRandomIcon();
      this.isDisabledButton = false;
    }, this.delay);
  }
}
