import { Component, OnInit } from '@angular/core';
import { CityListComponent } from '../city-list/city-list.component';
import { CITIES } from '../city-list/cities';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId)
      })

    })
  }

}
