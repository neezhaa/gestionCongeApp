import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    const footerLinks = [
        { id: "home", path: "/", text: t("footer.links.home") },
        { id: "how_it_works", path: "#about", text: t("footer.links.how_it_works") },
        { id: "features", path: "#features", text: t("footer.links.features") },
        { id: "faq", path: "/faq", text: t("footer.links.faq") },
        { id: "contact", path: "#contact", text: t("footer.links.contact") },
    ];

    return (
        <footer className="border-t border-gray-200 bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                <Link 
                    to="/" 
                    className="mb-6 text-3xl font-bold text-[#0f4c81] transition-colors hover:text-[#093558]"
                    aria-label={t("footer.brand")}
                >
                    {t("footer.brand")}
                </Link>

                <nav className="mb-8">
                    <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
                    {footerLinks.map((link) => (
                        <li key={link.id}>
                        <Link
                            to={link.path}
                            className="text-base text-gray-600 transition-colors hover:text-[#0f4c81] focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:ring-offset-2"
                            aria-label={link.text}
                        >
                            {link.text}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>

                <p className="text-base text-gray-500">
                    {t("footer.copyright")}
                </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;