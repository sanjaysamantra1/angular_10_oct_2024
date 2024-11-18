import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crudcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crudcomponent.component.html',
  styleUrl: './crudcomponent.component.css',
})
export class CrudcomponentComponent {
  eId: number | null = null;
  name: string = '';
  sal: number | null = null;
  gender: string = '';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  onDeleteClick(index: number) {
    Swal.fire({
      title: `Delete ${this.employees[index].name}`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Don't Delete",
      denyButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Employee Not Deleted',
          `The Employee(${this.employees[index].name}) record was not deleted.`,
          'info'
        );
      } else if (result.isDenied) {
        this.employees.splice(index, 1);
        Swal.fire('Deleted!', '', 'success');
      }
    });
  }

  onSaveEmployee() {
    if (this.eId && this.name && this.sal !== null && this.gender) {
      const newEmployee = {
        eId: this.eId,
        name: this.name,
        sal: this.sal,
        gender: this.gender,
      };

      // Add the new employee to the array
      this.employees.push(newEmployee);

      // Reset the form fields
      this.resetForm();
      Swal.fire({
        title: 'Successfully Added',
        text: '',
        icon: 'success',
      });
    } else {
      console.log('Form is invalid. Please fill all fields.');
    }
  }

  resetForm() {
    this.eId = null;
    this.name = '';
    this.sal = null;
    this.gender = '';
  }
}
