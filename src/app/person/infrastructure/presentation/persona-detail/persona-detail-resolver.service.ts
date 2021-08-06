import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import {PersonService} from '../../../services/person.service';
import {PersonInputDto} from '../../../dto/input/PersonInputDto'
import {Person} from '../../../services/Person'

@Injectable({
  providedIn: 'root'
})
export class PersonaDetailResolverService {

  constructor(private ps: PersonService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonInputDto> | Observable<never> {
    const id:number =+ route.paramMap.get('id')!;
    if (id==0)
    {
      return of(new Person());
    }
    return this.ps.findById(id).pipe(
      take(1),
      mergeMap(inputDto => {
        if (inputDto) {
          return of(inputDto);
        } else { // id not found
          this.router.navigate(['/person']);
          return EMPTY;
        }
      })
    );
  }
}

