/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<div className="p-20 text-center">Menu Page (Coming Soon)</div>} />
        <Route path="/deals" element={<div className="p-20 text-center">Deals Page (Coming Soon)</div>} />
        <Route path="/app" element={<div className="p-20 text-center">App Download Page (Coming Soon)</div>} />
        <Route path="/locations" element={<div className="p-20 text-center">Locations Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}
