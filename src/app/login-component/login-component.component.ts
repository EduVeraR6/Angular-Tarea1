import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  mostrarMensaje(): void {
    alert('Ha presionado sobre el botón aceptar');
  }
}
