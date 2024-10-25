import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'about',
    title: 'About',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ShoppingCartIcon />,
  },
];


export default function App() {

  const [session, setSession] = React.useState({
    user: {
      name: 'Praveen Kumar',
      email: 'praveen@codingmstr.com',
      image: <AccountCircleIcon />,
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'praveen@codingmstr.com',
            image: <AccountCircleIcon />,
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://codingmstr.com/img/logo-white.png" alt="MUI logo" />,
        title: 'CodingMSTR',
      }}
    >
      <Outlet />
    </AppProvider>
  );
}