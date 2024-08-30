import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminMain from './AdminMain';
import './admin.css'
const AdminDashbord = () => {
  return (
    <section className='admin-dashbord'>
      <AdminSidebar />
      <AdminMain />
    </section>
  );
};

export default AdminDashbord;