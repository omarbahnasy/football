import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class ApiCacheInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cachedResponse = localStorage.getItem(req.urlWithParams);

    if (cachedResponse) {
      return of(new HttpResponse(JSON.parse(cachedResponse)));
    }

    const modifiedReq = req.clone({
      headers: new HttpHeaders().append(
        'x-rapidapi-key',
        '850ae739c6c01acd6c455ae6a4b420f2'
      ),
    });
    return next.handle(modifiedReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          localStorage.setItem(req.urlWithParams, JSON.stringify(event));
        }
      })
    );
  }
}
