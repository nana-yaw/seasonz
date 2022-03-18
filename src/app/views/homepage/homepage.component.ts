import { Weather } from './../../models';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ip: string = "";
  currentWeatherData: any;

  constructor(
    private httpService: HttpService
  ) { }

  getCurrentWeatherDetails(){
     this.httpService.getClientPublicIp()
       .subscribe((data: any) => {
          // console.log(data.IPv4);
          this.ip = data.IPv4;
          // console.log(this.ip);
          this.httpService.getWeatherDetailsByIP(this.ip).subscribe((weatherData: any) => {
            console.log(weatherData.data[0]);
            this.currentWeatherData = weatherData.data[0];
          })

       });
  }

  ngOnInit(): void {
    this.getCurrentWeatherDetails()
  }


}
