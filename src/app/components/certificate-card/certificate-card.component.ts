import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.scss'
})
export class CertificateCardComponent {
  @Input() title!: string;          // Nome da certidão
  @Input() icon!: string;           // URL do ícone ou nome do ícone
  @Input() isChecked = false;       // Se está selecionado

  @Output() selectionChange = new EventEmitter<boolean>();

  toggleSelection() {
    this.isChecked = !this.isChecked;
    this.selectionChange.emit(this.isChecked);
  }

}
