import { Injectable } from "@angular/core";

@Injectable({ 
    providedIn : "root"
})

export class DummyService {
    addedIp : any = "";

    addText(ip : any) : void {
      this.addedIp= this.addedIp;
    }
}