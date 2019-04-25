import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { OwnerComponent } from './owner/owner.component';
import { TrainerComponent } from './trainer/trainer.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/owner', pathMatch: 'full' },
  {path: 'page1', component: Page1Component},
  {path: 'owner', component: OwnerComponent},
  {path: 'trainer', component: TrainerComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
