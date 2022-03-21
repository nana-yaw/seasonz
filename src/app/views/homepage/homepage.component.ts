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
  celcius: number = 0;
  fahrenheit: number = 0;
  symbol: string = '°C'

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getCurrentWeatherDetails()
  }

  getCurrentWeatherDetails(){
    this.httpService.getClientPublicIp()
      .subscribe((data: any) => {
         this.ip = data.IPv4;
         this.httpService.getWeatherDetailsByIP(this.ip).subscribe((weatherData: any) => {
          this.celcius = weatherData.data[0].temp;
           this.currentWeatherData = {
            ob_time: weatherData.data[0].ob_time,
            temp: weatherData.data[0].temp,
            city_name: weatherData.data[0].city_name,
            symbol: this.symbol
           }
         })

      });
 }

 convertFromCelciusToFahrenheit(celcius: number): number {
  const cTemp = celcius;
  let fahrenheit = cTemp * (9/5) + 32;
  return fahrenheit;
}

toggleTemperatureUnit(event: any) {
  this.fahrenheit = this.convertFromCelciusToFahrenheit(this.celcius)

  if (event.target.checked) {
    this.currentWeatherData.temp = this.fahrenheit.toFixed(2);
    this.currentWeatherData.symbol = '°F';
  } else {
    this.currentWeatherData.temp = this.celcius.toFixed(2);
    this.currentWeatherData.symbol = '°C';
  }
}

}
