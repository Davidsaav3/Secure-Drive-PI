import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private apiUrl = 'https://proteccloud.000webhostapp.com/files.php';
  
  constructor(private http: HttpClient) {}

  files(folderPath: string): Observable<any> {
    const formData = new FormData();
    formData.append('folder_path', folderPath);
    return this.http.post<any>(this.apiUrl, formData);
  }
}