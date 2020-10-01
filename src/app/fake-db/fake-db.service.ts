import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ECommerceFakeDb } from './e-commerce';
import { ItemFakeDb } from './item';
import { MemberTodoFakeDb } from './member';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'member'      : MemberTodoFakeDb.current,
            // E-Commerce
            // 'e-commerce-products' : ECommerceFakeDb.products,
            // 'e-commerce-orders'   : ECommerceFakeDb.orders,
            'e-commerce-products' : ItemFakeDb.current,
            
        };
    }
}
