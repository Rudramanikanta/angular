import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchvalue:string=""
  @Output()
  outputsearch:EventEmitter<string>=new EventEmitter()
  ontextchanged(){
   this.outputsearch.emit(this.searchvalue)
  }
}
