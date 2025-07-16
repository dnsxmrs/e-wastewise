export default function Footer() {
    return (
        <footer className="p-4 container mx-auto flex justify-center items-center">
            {/* instead of fixed year */}
            <p className="text-sm ">© {new Date().getFullYear()} E-WasteWise. All rights reserved.</p>
        </footer>
    );
}
