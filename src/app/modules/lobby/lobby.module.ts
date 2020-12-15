import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyRoutingModule } from './lobby-routing.module';
import {SideNavComponent} from './admin-dashboard/common/side-nav/side-nav.component'


@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ]
})
export class LobbyModule { }
