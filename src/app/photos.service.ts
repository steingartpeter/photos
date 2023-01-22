import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashRspns {
  urls: {
    regular: string;
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  baseUrl: String = 'https://api.unsplash.com/photos/?client_id=';
  apiKey: String = 'tS4irPtoTaSYEjs4SMmHBncZwuUif31inHgV-lpuoA4';

  constructor(private http: HttpClient) {}

  getRndmPhoto() {
    //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    //currUrl: String = this.baseUrl + this.apiKey + '/random';
    return this.http.get<UnsplashRspns>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID tS4irPtoTaSYEjs4SMmHBncZwuUif31inHgV-lpuoA4',
        },
      }
    );
  }
}
