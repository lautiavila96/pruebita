import { Component } from '@angular/core';
import { ServiveService } from './servive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'PruebaSimpleFront';
constructor(private servive:ServiveService){}

  name:string = ''
  successMessage : string = ''

  create() {
    // Verifica si el campo "name" está lleno
    if (this.name.trim() !== '') {
      // Crea un objeto con el campo "name"
      const data = { name: this.name };

      // Llama al servicio para enviar la solicitud POST
      this.servive.create(data).subscribe(
        (response) => {
          // Maneja la respuesta del servidor
          this.successMessage = 'Registro exitoso';
          // Puedes realizar otras acciones aquí si es necesario
        },
        (error) => {
          // Maneja los errores si es necesario
          console.error('Error:', error);
        }
      );
    }
  }
}
