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
  public initials: string;
  public circleColor: string;
  public size: string;
  public marginSize: string;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  ngOnInit() {
    this.initials = this.name.charAt(0);
    const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    this.circleColor = this.colors[randomIndex];
    this.getSize();
  }

  getSize() {
    if (this.nicknames) {
      this.size = '50px';
      this.marginSize = '5px';
    } else {
      this.size = '30px';
    }
  }
}
