import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UploadService } from '../../../../core/services/upload.service';
import { Upload } from '../../../../core/interface/UploadInterface';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;
  uploads?: Upload[];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public uploadService: UploadService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [[ 5, "desc" ]],
      processing: true
    };
    this.getUploads();
  }

  getUploads() {
    this.loading = true;
    try {
      this.uploadService.getUploads().pipe(map(data => {
        const objData = data as Upload[];
        return objData;
      })).subscribe(data => {
        console.log(data);
        this.uploads = data;
        this.loading = false;
        this.success = true;
        this.dtTrigger.next();
      });
    } catch (error) {
      console.log(error);
      this.error = true;
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
