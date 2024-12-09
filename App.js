import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import Register from './components/Register';
import SearchItems from './components/SearchItems';
import Donations from './components/Donations';
import ManageItems from './components/ManageItems';
import ManageDonations from './components/ManageDonations';
import ManageUsers from './components/ManageUsers';
import LocationManagement from './components/LocationManagement';
import PieceManagement from './components/PieceManagement';
import VolunteerRankings from './components/VolunteerRankings';
import VolunteerManagement from './components/VolunteerManagement';
import ManageRoles from './components/ManageRoles';
import ManageUserRoles from './components/ManageUserRoles';
import RoleManagement from './components/RoleManagement';
import OrderManagement from './components/OrderManagement';
import DeliveredOrders from './components/DeliveredOrders';
import Dashboard from './components/Dashboard';
import RecipientManagement from './components/RecipientManagement';

function App() {
  const [user, setUser] = useState(null); // State to track logged-in user

  const handleLogin = (userData) => {
    setUser(userData); // Set user details after login
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
      });
  
      if (response.ok) {
        setUser(null); // Clear user state
      } else {
        alert('Logout failed');
      }
    } catch (err) {
      alert('Error logging out');
    }
  };  

  return (
    <Router>
      <div style={styles.page}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <p style={styles.subject}>CS-GY 6083 Fall 2024 — Databases Project</p>
          <p style={styles.group}>
            <strong>Group Members:</strong> Aditya Jhaveri (N13689134), Sanyukta Tuti (N18689585),
            Naman Tyagi (N14636762)
          </p>
        </div>

        {/* Header */}
        <header style={styles.header}>
          <h1>WelcomeHome</h1>
          {user && <p style={styles.welcome}>Welcome, {user.fname} {user.lname}!</p>}
        </header>

        {/* Navigation */}
        <nav>
          <ul style={styles.navList}>
            {!user ? (
              <>
                <li>
                  <NavLink to="/login" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Search Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/donations" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Donations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage-items" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage-donations" style={styles.navItem} activeStyle={styles.activeNavItem}>
                    Manage Donations
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Main Content */}
        <main style={styles.main}>
          <ErrorBoundary>
            <Routes>
              {!user ? (
                <>
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />
                  <Route path="/register" element={<Register />} />
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/search" element={<SearchItems />} />
                  <Route path="/donations" element={<Donations />} />
                  <Route path="/manage-items" element={<ManageItems />} />
                  <Route path="/manage-donations" element={<ManageDonations />} />
                  <Route path="/manage-users" element={<ManageUsers />} />
                  <Route path="/location-management" element={<LocationManagement />} />
                  <Route path="/piece-management" element={<PieceManagement />} />
                  <Route path="/volunteer-rankings" element={<VolunteerRankings />} />
                  <Route path="/volunteer-management" element={<VolunteerManagement />} />
                  <Route path="/manage-roles" element={<ManageRoles />} />
                  <Route path="/manage-user-roles" element={<ManageUserRoles />} />
                  <Route path="/role-management" element={<RoleManagement />} />
                  <Route path="/order-management" element={<OrderManagement />} />
                  <Route path="/delivered-orders" element={<DeliveredOrders />} />
                  <Route path="/recipient-management" element={<RecipientManagement />} />
                </>
              )}
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; WelcomeHome Project, Fall 2024</p>
        </footer>
      </div>
    </Router>
  );
}

// Styling Object
const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
  },
  subject: {
    fontSize: '18px',
    margin: '0',
  },
  group: {
    fontSize: '16px',
    margin: '5px 0 0',
  },
  header: { textAlign: 'center', margin: '20px 0' },
  welcome: { fontSize: '18px', color: '#007bff', marginTop: '10px' },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px 0',
    margin: '0 auto',
    backgroundColor: '#0056b3',
  },
  navItem: {
    padding: '15px 30px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  activeNavItem: {
    backgroundColor: '#004494',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  main: {
    flex: 1,
    margin: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    padding: '15px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
  },
};

export default App;

