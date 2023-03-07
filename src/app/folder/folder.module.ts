import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { NewsCardModule } from "../components/news-card/news-card.module";

@NgModule({
    declarations: [FolderPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        NewsCardModule
    ]
})
export class FolderPageModule {}
