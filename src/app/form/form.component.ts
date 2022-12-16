import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit  {
 
 @Input() itemId :String = '';

  constructor() {}

  ngOnInit(): void {}

  @Output() newItemEvent = new EventEmitter<String>();

  addNewItem(value: String) {
    this.newItemEvent.emit(value);
  }

  listas: string[] = [];


}
