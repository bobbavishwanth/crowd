export default function TestPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Test Page</h1>
                <p className="text-gray-600 mb-6">Welcome to your test page</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Click Me
                </button>
            </div>
        </div>
    );
}