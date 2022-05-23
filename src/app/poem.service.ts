import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poem } from './poem';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'any',

  
})
export class PoemService {
  constructor(private httpClient: HttpClient,) {}
  poem_api_url = 'https://api.openai.com/v1/engines/text-curie-001/completions';
 text: string;
  getPoem(text): Observable<Poem> {
    const data = {
      prompt: text,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    let header = new HttpHeaders().set(
      'Authorization',
      `Bearer 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`
    ).set(
      'Content-type', 'Application/json'
    );
    const body = JSON.stringify(data);
    return this.httpClient
      .post<Poem>(this.poem_api_url, body, {
        headers: header,
      })
      // .pipe(
      //   map((resp: any) => resp.json()),
      //   catchError((error) => throwError(error))
      // );
  }

  
}
