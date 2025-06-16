import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function PricingSection() {
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section id="PricingSection" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900 sm:text-5xl">
          {t("pricing.title")}
        </h2>
        <p className="mb-14 text-center text-lg text-gray-600">{t("pricing.subtitle")}</p>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-center">
          {Object.entries(plans).map(([key, plan]) => {
            const isPro = key === "pro";
            const textColor = isPro ? "text-white" : "text-gray-900";
            const bgColor = isPro ? "bg-[#0f4c81]" : "bg-white";
            const iconColor = isPro ? "text-white" : "text-[#0f4c81]";
            const btnStyle = isPro
              ? "bg-white text-[#0f4c81] hover:bg-gray-100"
              : "border border-gray-700 text-gray-800 hover:bg-gray-100";

            return (
              <div
                key={key}
                className={`relative flex-1 rounded-3xl ${bgColor} ${textColor} p-8 shadow-xl transition-transform hover:scale-[1.02] sm:p-10`}
              >
                {plan.badge && (
                  <div className="absolute -top-6 left-1/2 w-max -translate-x-1/2 transform rounded-full bg-black px-4 py-1 text-sm font-semibold text-white uppercase shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <h3 className="mb-4 text-3xl font-bold">{plan.title}</h3>
                <p className="mb-6 text-base font-light sm:text-lg">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-5xl font-extrabold">{plan.price}</p>
                  <p className="text-sm uppercase opacity-80">{plan.tag}</p>
                </div>

                <Link
                  to="/signup"
                  className={`mb-8 inline-block w-full rounded-md py-3 text-center text-sm font-semibold uppercase transition ${btnStyle}`}
                >
                  {plan.button}
                </Link>

                <ul className="space-y-4 text-left text-base font-light">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className={`mr-3 mt-1 h-6 w-6 ${iconColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
