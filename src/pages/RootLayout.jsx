import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';


export default function RootLayout() {

    const navigation = useNavigation();
    
    return (
        <div className="min-h-screen flex flex-col">
            <MainNavigation />
            <main className="flex-grow pb-20">
            {/* {navigation.state ==='loading' && <p>Loading page .....</p>} */}
                <Outlet />
            </main>
            <footer className="py-10 border-t border-slate-800 text-center text-slate-600">
                &copy; 2026 Event Hub. Built with React & Tailwind.
            </footer>
        </div>
    );
}