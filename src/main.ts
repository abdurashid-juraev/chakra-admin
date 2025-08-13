import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ConfirmationService, MessageService } from 'primeng/api';

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers || []), ConfirmationService, MessageService],
}).catch(err => console.error(err));
