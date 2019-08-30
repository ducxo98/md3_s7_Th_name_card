import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  @Input() cardName: string;
  @Input() Email: string;
  @Input() phone: string;


  constructor() { }

  ngOnInit() {
  }

}
