import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.css']
})
export class GravatarComponent implements OnInit {

  @Input()
  public nicknames: boolean;
  @Input()
  public name: string;
  @Input()
  public size: string;
  @Input()
  public iconType: number;//0 - ct, 1 - t, 2 - color

  public initialsColor: string;
  public initials: string;
  public marginSize: string;
  public image: string;
  private colors = [
    'assets/images/red.png',
    'assets/images/purple.png',
    'assets/images/green.png',
    'assets/images/yellow.png',
    'assets/images/blue.jpg'
  ];

  ngOnInit() {
    this.initials = this.name.charAt(0);
    if (this.iconType == 0) {
      this.image = 'assets/images/ct.png';
    } else if (this.iconType == 1) {
      this.image = 'assets/images/t.png';
    } else {
      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.image = this.colors[randomIndex];
      console.log(this.image);
      // break;
    }


    if (this.nicknames) {
      this.marginSize = "5px";
    } else {
      this.marginSize = "0px";
    }
  }

  getFontSize() {
    return (Number(this.size.substring(0, this.size.indexOf('p'))) / 1.5).toString() + "px";
  }
}
