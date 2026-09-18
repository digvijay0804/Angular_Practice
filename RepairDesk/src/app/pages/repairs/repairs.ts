import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RepairService } from '../../services/repair';

@Component({
  selector: 'app-repairs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './repairs.html',
  styleUrl: './repairs.css'
})
export class Repairs {
constructor(private repairService: RepairService) {
  this.repairs = this.repairService.repairs;
}
  customerName = '';
  mobile = '';
  deviceType = '';
  brand = '';
  model = '';
  problem = '';
  estimatedCost = 0;
  technician = '';
  notes = '';

  status = 'Received';

  repairs: any[] = [];

  successMessage = '';
  editingIndex = -1;

  saveRepair() {

    const repairData = {
      customerName: this.customerName,
      mobile: this.mobile,
      deviceType: this.deviceType,
      brand: this.brand,
      model: this.model,
      problem: this.problem,
      estimatedCost: this.estimatedCost,
      technician: this.technician,
      notes: this.notes,
      status: this.status
    };

    if (this.editingIndex === -1) {

      this.repairs.push(repairData);
      this.successMessage = 'Repair saved successfully!';

    } else {

      this.repairs[this.editingIndex] = repairData;
      this.successMessage = 'Repair updated successfully!';

      this.editingIndex = -1;
    }

    this.clearForm();
  }

  editRepair(index: number) {

    const repair = this.repairs[index];

    this.customerName = repair.customerName;
    this.mobile = repair.mobile;
    this.deviceType = repair.deviceType;
    this.brand = repair.brand;
    this.model = repair.model;
    this.problem = repair.problem;
    this.estimatedCost = repair.estimatedCost;
    this.technician = repair.technician;
    this.notes = repair.notes;

    this.status = repair.status;

    this.editingIndex = index;
    this.successMessage = '';
  }

  deleteRepair(index: number) {

    this.repairs.splice(index, 1);

    this.successMessage = 'Repair deleted successfully!';
  }

  clearForm() {

    this.customerName = '';
    this.mobile = '';
    this.deviceType = '';
    this.brand = '';
    this.model = '';
    this.problem = '';
    this.estimatedCost = 0;
    this.technician = '';
    this.notes = '';

    this.status = 'Received';
  }
}