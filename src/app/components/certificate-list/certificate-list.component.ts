import { Component } from '@angular/core';
import { CertificateCardComponent } from '../certificate-card/certificate-card.component';
import { CommonModule, NgFor } from '@angular/common';

interface Certificate {
  name: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [CertificateCardComponent, NgFor],
  templateUrl: './certificate-list.component.html',
  styleUrl: './certificate-list.component.scss'
})
export class CertificateListComponent {

  certificates: Certificate[] = [
    { name: 'Situação cadastral CPF', icon: '📄',selected: false },
    { name: 'Situação cadastral CNPJ', icon: '🏢', selected: false },
    { name: 'Certidão de antecedentes criminais (Federal)', icon: '🛡️', selected: false },
    { name: 'Certidão de antecedentes criminais (Estado de SP)', icon: '🛡️', selected: false },
    { name: 'Certidão Negativa de Débitos (CND)', icon: '💰', selected: false },
    { name: 'Certidão de situação militar', icon: '⚔️', selected: false },
    { name: 'Consulta CADIM', icon: '📊', selected: false },
    { name: 'Consulta SICAR', icon: '🌳', selected: false },
    { name: 'Declaração de Aptidão ao Pronaf (DAP)', icon: '🌽', selected: false },
    { name: 'SNCR – Sistema Nacional de Cadastro Rural', icon: '🚜', selected: false },
    { name: 'Certidão de quitação eleitoral', icon: '📦', selected: false },
    { name: 'Certidão de crimes eleitorais', icon: '⚖️', selected: false },
  ];

  onSelectionChange(cert: Certificate, selected:boolean) {
    cert.selected = selected
  }

}
