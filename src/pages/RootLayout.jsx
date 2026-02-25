import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNavigation />
            <main className="flex-grow pb-20">
                <Outlet />
            </main>
            <footer className="py-10 border-t border-slate-800 text-center text-slate-600">
                &copy; 2026 Event Hub. Built with React & Tailwind.
            </footer>
        </div>
    );
}