import { useRoutes } from 'react-router-dom';

// project import
import Porfolio from './Pages.js';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([Porfolio]);
}
