import { lazy } from "react";

// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Page404 = lazy(() => import("../pages/404"));


const OurCustomer = lazy(() => import("src/pages/press/OurCustomer"));
const OurStaff = lazy(() => import("src/pages/press/OurStaff"));
const StaffDetail = lazy(() => import("src/pages/press/StaffDetail"));
const CustomerDetail = lazy(() => import("src/pages/press/CustomerDetail"));
const OrderAdd = lazy(() => import("src/pages/press/OrderAdd"));
const OrderDetail = lazy(() => import("src/pages/press/pages/DetailsPage"));
const InvoicePage = lazy(() => import("src/pages/press/pages/InvoicePage"));
const NewOrder = lazy(() => import("src/pages/press/pages/newOrderTable"));
const ProcessingOrder = lazy(() => import("src/pages/press/pages/processingOrder"));
const ReadyOrder = lazy(() => import("src/pages/press/pages/readyOrder"));
const DeliveredOrder = lazy(() => import("src/pages/press/pages/deliveredTable"));
const CancelledOrder = lazy(() => import("src/pages/press/pages/cancelledOrder"));
const TotalOrder = lazy(() => import("src/pages/press/pages/allOrders"));
const IsBetweenOrder = lazy(() => import("src/pages/press/pages/IsBetweenOrder"));
const AllCustomers = lazy(() => import("src/pages/press/pages/Customers"));



const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/staff-users",
    component: OurStaff,
  },
  {
    path: "/staff/:uuid",
    component: StaffDetail,
  },
  {
    path: "/our-customers",
    component: OurCustomer,
  },
  {
    path: "/customers/:uuid",
    component: CustomerDetail,
  },
  {
    path: "/customer-order/add",
    component: OrderAdd,
  },
  {
    path: "/customer-order/edit/:uuid",
    component: OrderAdd,
  },
  {
    path: "/orders/:uuid",
    component: OrderDetail,
  },
  {
    path: "/invoice/:uuid",
    component: InvoicePage,
  },
  {
    path: "/order/new",
    component: NewOrder,
  },
  {
    path: "/order/processing",
    component: ProcessingOrder,
  },
  {
    path: "/order/ready",
    component: ReadyOrder,
  },
  {
    path: "/order/delivered",
    component: DeliveredOrder,
  },
  {
    path: "/order/cancelled",
    component: CancelledOrder,
  },
  {
    path: "/all/orders",
    component: TotalOrder,
  },
  {
    path: "/warning/orders",
    component: IsBetweenOrder,
  },
  {
    path: "/show-customers",
    component: AllCustomers,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;