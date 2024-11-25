import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserListComponent } from '../user-list/user-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElementData } from './table_data';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [
    UserListComponent,
    ProductListComponent,
    EmployeeListComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = PeriodicElementData;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar() {
    this._snackBar.open('Hello Everyone, Good Morning', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
