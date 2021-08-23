import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

class SearchCloutPost {
  poster: string;
  username: string;
  postHash: string;
  body: string;
}

export class TrendingPost {
  SearchCloutPost: SearchCloutPost;
}

export class SearchCloutService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getTrendingPosts(): Observable<any> {
    return this.httpClient.get("https://api.tijn.club/trends");
  }

}
