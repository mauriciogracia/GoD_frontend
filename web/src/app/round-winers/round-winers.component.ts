import { Component, OnInit } from '@angular/core';
import { RoundWiner } from '../models/RoundWiner';
import { Input } from '@angular/core';

@Component({
  selector: 'app-round-winers',
  templateUrl: './round-winers.component.html',
  styleUrls: ['./round-winers.component.css']
})
export class RoundWinersComponent implements OnInit {
  @Input() listWiners : RoundWiner[] = []

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getWiners() {
    return this.listWiners ;
  }



}
