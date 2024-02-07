import * as Icon from 'react-feather';

const SidebarData = [
 
  { caption: 'Users' },
  {
    title: 'Users',
    href: '/apps/notes',
    icon: <Icon.FileText />,
    id: 2.1,
    collapisble: true,
    children: [
      {
        title: 'View all users',
        href: '/users-list',
        icon: <Icon.Disc />,
      },
      {
        title: 'Pending users',
        href: '/accept-users',
        icon: <Icon.Disc />,
      },
    ],
  },
  { caption: 'Packages' },
  {
    title: 'Pending Packages',
    href: '/accept-packages',
    icon: <Icon.MessageCircle />,
    id: 2.2,
    collapisble: false,
  },
  {
    title: 'Pending Topups',
    href: '/accept-topups',
    icon: <Icon.User />,
    id: 10.5,
    collapisble: false,
  },
  { caption: 'Withdrawal' },
  {
    title: 'Pending withdrawal',
    href: '/ecom',
    icon: <Icon.ShoppingCart />,
    id: 15.7,
    collapisble: true,
    children: [
      {
        title: 'Capital Withdraw',
        href: '/capital-withdraw-pending',
        icon: <Icon.Disc />,
      },
      {
        title: 'Wallet Withdraw',
        href: '/wallet-withdraw-pending',
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: 'Split Daily ROI',
    href: '/roi-split',
    icon: <Icon.User />,
    id: 10.6,
    collapisble: false,
  },
  { caption: 'Reports' },
  {
    title: 'Add Fund History',
    href: '/addFund-History',
    icon: <Icon.User />,
    id: 2.3,
    collapisble: false,
  },
  {
    title: 'Withdraw Reports',
    href: '/tickt',
    icon: <Icon.Bookmark />,
    id: 18.8,
    collapisble: true,
    children: [
      {
        title: 'Capital withdraw Reports',
        href: '/capital-withdraw-histroy',
        icon: <Icon.Disc />,
      },
      {
        title: 'Wallet withdraw Reports',
        href: '/wallet-withdraw-history',
        icon: <Icon.Disc />,
      },
    ],
  },
  {
    title: 'ROI Split History',
    href: '/apps/contacts',
    icon: <Icon.User />,
    id: 20.3,
    collapisble: false,
  },
];

export default SidebarData;
