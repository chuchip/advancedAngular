import { Component, OnInit } from '@angular/core';
import { ComunServiceService } from '../shared/services/comun-service.service';
import { ManualService } from '../shared/services/manual.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  constructor(comunService: ComunServiceService, manualService:ManualService) { 

  }

  ngOnInit(): void {
  }

}
