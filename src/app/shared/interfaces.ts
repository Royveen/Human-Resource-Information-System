import { ModuleWithProviders } from '@angular/core';

export interface ILogin {
    username: string,
    password: string
}

export interface IResource {
    sap_id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    country: string;
    location: string;
    state: string;
    email: string;
    date_of_birth: string;
    date_of_joining:string;
    contact: string;
    role:string;
    Designation:string;
    city:string;
    status:string;
    seat_no:string;
    transport_avail:string;
    vnet:string;
    projects:IProject[];
    total_alloc:string;
    record_status:string;
    user_access:string;
}

export interface IResourcePersonal {
    
}
export interface IProject {
    client_id:string;
    assignment_start_date:string;
    assignment_end_date:string;
    project_group:string;
    project_id:string;
    project_name:string;
    status_in_project:string;
    team_group:string;
    team_name:string;
    allocation:string;
    manager_1_id:string;
    manager_2_id:string;
    manager_1_name:string;
    manager_2_name:string;
    project_country:string;
    project_location:string;
    
}

export interface ISeperation {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    orderTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}