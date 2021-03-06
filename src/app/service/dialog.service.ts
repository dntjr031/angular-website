import { ConfirmDialogComponent } from './../component/common/confirm-dialog/confirm-dialog.component';
// dialog.service.ts
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { AlertDialogComponent } from 'src/app/component/common/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  alert(title:string, desc: string): any {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '300px',
      disableClose: true,
      data: { title: title, description: desc }
    });
    return dialogRef;
  }

  confirm(title:string, desc: string): any {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      disableClose: true,
      data: { title: title, description: desc }
    });
    return dialogRef;
  }
}
