import { Component, Input } from '@angular/core';
import { CubeSvgComponent } from '../../../../shared/components/svg-icons/cube-svg/cube-svg';
import { KeySvgComponent } from '../../../../shared/components/svg-icons/key-svg/key-svg';
import { PersonSvgComponent } from '../../../../shared/components/svg-icons/person-svg/person-svg';
import { PersonCircleSvgComponent } from '../../../../shared/components/svg-icons/person-circle-svg/person-circle-svg';
import { DownloadBtn } from '../../../../shared/components/download-btn/download-btn';

@Component({
  selector: 'app-header',
  imports: [
    CubeSvgComponent,
    KeySvgComponent,
    PersonSvgComponent,
    PersonCircleSvgComponent,
    DownloadBtn,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() size: string | number = '22';
  @Input() pathClass: string = '#2D3748';
  @Input() color: string = 'text-dark-text';
  @Input() bgColor: string = '';
  @Input() bgHeader: string = 'header-box';
}
