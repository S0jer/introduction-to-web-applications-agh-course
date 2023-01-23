import { StorageService } from '../storage.service';
import { User } from '../mock-data/user';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenagoGuard implements CanActivate {

  userList: User[]=[];
  constructor( public authService: AuthService, public router: Router, private storage: StorageService ){
    this.getUserList();
  }

  getUserList(){
    this.storage.getUserListSubject().subscribe(u=>{
      this.userList=u;
    });
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authState$.pipe(map(state =>{
      let bool=false;
      this.userList.forEach(x =>{
        if(x.id === state?.uid && (x.admin || x.menager)) bool=true;
      });
      if(!bool){ this.router.navigate(['home']); return false;}
      return true;
    }));
  }
  
}
