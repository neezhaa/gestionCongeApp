import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="mb-12 bg-[#e9f3fa] py-12">
      <div className="container mx-auto flex flex-col items-center lg:flex-row">
        <div className="mb-8 w-full lg:mb-0 lg:w-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-have-no-annual-leave-to-rest-from-hard-work-12513375-10207361.png"
            alt={t("cta.title")}
            className="mx-auto h-auto max-w-md object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col justify-center p-4 lg:w-1/2 lg:px-8">
          <h2 className="mb-6 text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-left">
            {t("cta.title")}
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 lg:text-left">
            {t("cta.description")}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/signup"
              className="rounded-lg bg-[#0f4c81] px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#093558] focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:ring-offset-2"
              aria-label={t("cta.button")}
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;