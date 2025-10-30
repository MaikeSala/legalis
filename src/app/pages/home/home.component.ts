import { Component } from '@angular/core';
import { CertificateListComponent } from '../../components/certificate-list/certificate-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CertificateListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
