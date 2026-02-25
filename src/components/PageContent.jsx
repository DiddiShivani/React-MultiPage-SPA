function PageContent({ title, children }) {
    return (
        <div className="text-center mt-20 px-4">
            <h1 className="text-4xl font-bold text-slate-100 mb-6 leading-tight">
                {title}
            </h1>
            <div className="text-lg text-slate-400 max-w-2xl mx-auto">
                {children}
            </div>
        </div>
    );
}

export default PageContent;