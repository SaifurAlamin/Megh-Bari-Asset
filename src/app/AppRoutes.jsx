
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';
import InvestmentCalculatorPage from '../pages/InvestmentCalculatorPage';
import BookSiteVisit from '../pages/BookSiteVisit';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import ProjectsSection from '../components/home/ProjectsSection';
import PlotMap from '../pages/PlotMap';
import GallerySection from '../components/home/GallerySection';
import ManagementSection from '../components/home/ManagementSection';
const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f6f1] px-5 text-center">

            <h1 className="font-display text-6xl font-bold text-[#18352d]">
                404
            </h1>

            <p className="mt-4 text-slate-600">
                Page not found.
            </p>

            <a
                href="/"
                className="mt-6 rounded-full bg-[#18352d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b98a52]"
            >
                Back to Home
            </a>

        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
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
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
