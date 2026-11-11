
import { Routes, Route, Link } from 'react-router-dom';

// Public Pages
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';
import InvestmentCalculatorPage from '../pages/InvestmentCalculatorPage';
import BookSiteVisit from '../pages/BookSiteVisit';
import PlotMap from '../pages/PlotMap';

// Public Sections
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import ProjectsSection from '../components/home/ProjectsSection';
import GallerySection from '../components/home/GallerySection';
import ManagementSection from '../components/home/ManagementSection';

// Admin
import AdminLayout from '../components/admin/layout/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';

// 404 Page
const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f6f1] px-5 text-center">

            <h1 className="font-display text-6xl font-bold text-[#18352d]">
                404
            </h1>

            <p className="mt-4 text-slate-600">
                Page not found.
            </p>

            <Link
                to="/"
                className="mt-6 rounded-full bg-[#18352d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#245344]"
            >
                Back to Home
            </Link>

        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>

            {/* =========================
                PUBLIC WEBSITE ROUTES
            ========================= */}

            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<ProjectsSection />} />

            <Route
                path="/projects/:projectId"
                element={<ProjectDetails />}
            />

            <Route
                path="/investment-calculator"
                element={<InvestmentCalculatorPage />}
            />

            <Route path="/book-site-visit" element={<BookSiteVisit />} />

            <Route path="/about" element={<AboutSection />} />

            <Route path="/contact" element={<ContactSection />} />

            <Route path="/gallery" element={<GallerySection />} />

            <Route path="/management" element={<ManagementSection />} />

            <Route path="/plot-map" element={<PlotMap />} />


            {/* =========================
                ADMIN PANEL ROUTES
            ========================= */}

            <Route path="/admin" element={<AdminLayout />}>

                <Route path="dashboard" element={<Dashboard />} />

            </Route>


            {/* =========================
                404
            ========================= */}

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default AppRoutes;
