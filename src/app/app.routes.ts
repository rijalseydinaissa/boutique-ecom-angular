import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import ProductsComponent from './pages/products/products.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path:'products/:category',
        component: ProductsComponent
    },
    {
        path:'product/:id',
        component: ProductsComponent
    }
];
