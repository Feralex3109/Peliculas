import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'peliculas';
  almacenar: any = []
  limit = 0

  enviar() {
    console.log(this.limit);
    this.http
      .post(`http://localhost:3000/api/peliculas`, { limit: this.limit })
      .subscribe((result: any) => {
        this.almacenar = result.data;
        console.log(this.almacenar)
      });
  }
}
