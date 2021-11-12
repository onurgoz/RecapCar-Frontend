import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44307/api/';
  token =
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQiLCJlbWFpbCI6Im9udXJnb3o5OEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoib251ciBnb3oiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiYWRtaW4iLCJicmFuZCIsImNhciJdLCJuYmYiOjE2MzY3MTEzNTEsImV4cCI6MTYzNjcxMTk1MSwiaXNzIjoib251ckBnb3ouY29tIiwiYXVkIjoib251ckBnb3ouY29tIn0.1fx-EM7ykRgLGlnvvGehzlMy2Zyxs6Bj8jJDwXPFJipCnoUuGS0l_go4Vpwocr__r0yn9pYXDz1Ea2n_X4kHgw';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/GetCarsByBrandId?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}
