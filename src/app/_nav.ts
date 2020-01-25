import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Login',
    url: '/login',
    icon: 'icon-login',
  },
  {
    name: 'Table',
    url: '/table',
    icon: 'icon-chart',
    children: [
      {
        name: 'Table',
        url: '/table/table',
        icon: 'icon-chart'
      },
      {
        name: 'Pagination',
        url: '/table/pagination',
        icon: 'icon-chart'
      }
    ]
  },
];
