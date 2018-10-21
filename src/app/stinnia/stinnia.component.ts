import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stinnia',
  templateUrl: './stinnia.component.html',
  styleUrls: ['./stinnia.component.css']
})
export class StinniaComponent implements OnInit {
	title ='JSON CV ';

 constructor(private httpService: HttpClient) { }

   // JS object array as class property
	cv : string [];
	
	// (prod) is a parameter for the function
	
	
  ngOnInit () {
	  
    this.httpService.get('./assets/cv.json').subscribe(
      data => {
        this.cv = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.cv);
      },
      (err: HttpErrorResponse) => {
       // console.log (err.message);
      }
    );
  }
// end class	
}