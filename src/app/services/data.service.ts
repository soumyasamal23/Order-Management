import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsersData():Observable<any>{
    return this.http.get("http://localhost:9999/samplingkit/rest/SponsorUser/getAllSponsorUsers");
  }

  //addingUsers(data) {
  //  return this.http.post("http://localhost:8087/samplingkit/rest/SponsorUser/createSponsorUser",data);
 // }
  getSponserUser(){
    return this.http.get("http://localhost:9999/samplingkit/rest/sponsor/showAllSponsors");
  }
  // Post user
  postUsers(data):Observable<any>{
    return this.http.post("http://localhost:9999/samplingkit/rest/SponsorUser/createUser",data);
  }
 // Delet User
  deleteUsers(id):Observable<any>{
    return this.http.delete('http://localhost:9999/samplingkit/rest/SponsorUser/deleteSponsorUser'+"/"+ id);
  }
  updateUsers(data):Observable<any>{
    return this.http.put("http://localhost:9999/samplingkit/rest/SponsorUser/updateSponsorUser",data);
  }

  //All status 
  getStatusData():Observable<any>{
    return this.http.get("http://localhost:9999/samplingkit/rest/Status/getAllStatus");
  }
  // Post Status
  postStatus(data):Observable<any>{
    return this.http.post("http://localhost:9999/samplingkit/rest/Status/createStatus",data);
  }
  //Delete Status
  deleteStatus(id):Observable<any>{
    return this.http.delete('http://localhost:9999/samplingkit/rest/Status/getStatusById'+"/"+ id);
  }
  //Edit Status
  // editStatusData(data,id):Observable<any>{
  //   return this.http.put('http://localhost:9999/samplingkit/rest/Status/updateStatus' +"/"+ id );
  // }

  //All SpecialEvent 
  getSpecialEvent():Observable<any>{
    return this.http.get("http://localhost:9999/samplingkit/rest/SpecialEvent/getSpecialEvents");
  }
  // Get SpecialEvent by Id
  getSpecialEventById(id):Observable<any>{
    return this.http.get("http://localhost:9999/samplingkit/rest/SpecialEvent/getSpecialEventById" +'/'+ id);
  }
  // Post SpecialEvent
  postspecialEvent(data):Observable<any>{
    return this.http.post("http://localhost:9999/samplingkit/rest/SpecialEvent/createSpecialEvent",data);
  }

  //Update SpecialEvent
  updateEvents(data):Observable<any>{
    return this.http.put('http://localhost:9999/samplingkit/rest/SpecialEvent/updateSpecialEvent',data);
  }

  //Delete SpecialEvent

  deleteEvent(id):Observable<any>{
    return this.http.delete('http://localhost:9999/samplingkit/rest/SpecialEvent/deleteSpecialEvent'+"/"+ id);
  }

   //Get All SpecialEvent 
   getAllPostalcode():Observable<any>{
    return this.http.get("http://192.168.2.151:8087/samplingkit/rest/PostalCode/getAllPostalCodes");
  }
  // Post SpecialEvent
  postPostalcode(data):Observable<any>{
    return this.http.post("http://192.168.2.151:8087/samplingkit/rest/PostalCode/createPostalCode",data);
  }

  //Update SpecialEvent
  updatePostalcode(data):Observable<any>{
    return this.http.put('http://192.168.2.151:8087/samplingkit/rest/PostalCode/updatePostalCode',data);
  }

  //Delete SpecialEvent

  deletePostalcode(id):Observable<any>{
    return this.http.delete('http://192.168.2.151:8087/samplingkit/rest/PostalCode/deletePostalCode'+"/"+ id);
  }
}
