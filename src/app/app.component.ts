import { Component, Input } from '@angular/core';
import { Poem } from './poem';
import { Inject } from '@angular/core';
import { PoemService } from './poem.service';
import {HttpClient} from "@angular/common/http";

const appSecret = '123'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular-reload';
  poem!: Poem
  text: string;
  responseInput: string;
  

  

  constructor( private http: HttpClient,
    private poemService: PoemService) {
    this.poem = null;
    
   this.text = null;
   
   console.log(process.env.OPEN_API_KEY)
    }
  ngOnInit(data: { poems: Poem }) {
    // this.getPoem();
    
    console.log("poem", this.poem);
  }

  getPoem(text): void {
    this.poemService.getPoem(text)
      .subscribe(poem => {
        this.poem = poem
        
        console.log(text, 'text');
      });
  }

  

  clearPoem(text){
    text = ' ';
    this.responseInput = ' ';
    this.text = ' ';
      
    
  }

// 
}
