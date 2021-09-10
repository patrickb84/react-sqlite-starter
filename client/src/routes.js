import Home from './views/Home';
import NotebookIndex from './views/Notebook.Index';
import Settings from './views/Settings.View';

const homePage = {
  component: Home,
  label: 'Index',
  path: '/',
  exact: true,
};

const notebooksIndex = {
  component: NotebookIndex,
  label: 'Notebooks',
  path: '/notebooks',
};

const settingsPage = {
  component: Settings,
  label: 'Settings',
  path: '/settings',
};

const MainRoutes = [homePage, notebooksIndex, settingsPage];
const NavbarRoutes = [notebooksIndex, settingsPage];

export { MainRoutes, NavbarRoutes };
