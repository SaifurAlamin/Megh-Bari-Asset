
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f4f7fa] lg:flex">

            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="min-w-0 flex-1">
                <Header
                    onMenuClick={() => setSidebarOpen(true)}
                />

                <main className="min-h-[calc(100vh-76px)] p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default AdminLayout;
