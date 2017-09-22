import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component'
import { IndexComponent } from './index/index.component'
import { MylistingComponent } from './mylisting/mylisting.component'


const routes: Routes = [
{
	path: '',
	component: IndexComponent
},
{
	path: 'browse',
	component: BrowseComponent
},
{
	path: 'index',
	component: IndexComponent
},
{
	path: 'listings',
	component: MylistingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
