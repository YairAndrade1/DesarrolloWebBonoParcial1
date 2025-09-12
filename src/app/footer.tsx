
export default function Footer() {
    const language = "English";
    const themeSelected = "Light";
    return (
        <div>
            <footer className="flex flex-col bg-white text-center py-10">
                <p>&copy; 2026 Uniandes. All rights reserved.</p>
                <p className="text-sm">Language: {language}</p>
                <p className="text-sm">Theme: {themeSelected}</p>

            </footer>
        </div>
    );
}