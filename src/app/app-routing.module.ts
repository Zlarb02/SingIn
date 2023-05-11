import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { NotFoundComponent } from './core/layout/not-found/not-found.component';
import { CatalogComponent } from './page/catalog/catalog.component';
import { ConnectionComponent } from './page/connection/connection.component';
import { MySongsComponent } from './page/my-songs/my-songs.component';
import { PlayersComponent } from './page/players/players.component';
import { GridComponent } from './page/players/grid/grid.component';
import { LineComponent } from './page/players/line/line.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'connection',
    component: ConnectionComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'songs',
    component: MySongsComponent
  },
  {
    path: 'flow',
    children: [
      {
        path: '',
        component: PlayersComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'line',
        component: LineComponent
      }
    ]
  },
  /*   {
      path: 'book',
      children: [
        {
          path: '',
          component: CreateComponent
        },
        {
          path: ':id',
          children: [
            {
              path: '',
              component: DetailComponent
            },
            {
              path: 'edit',
              component: UpdateComponent
            },
            {
              path: 'delete',
              component: DeleteComponent
            },
          ]
        }
      ]
    },
    {
      path: 'book/:id',
      component: DetailComponent
    },
    {
      path: 'book/:id/edit',
      component: UpdateComponent
    },
    {
      path: 'book/:id/delete',
      component: DeleteComponent
    }, */
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
