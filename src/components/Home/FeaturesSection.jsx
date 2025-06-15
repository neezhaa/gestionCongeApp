import { useTranslation } from 'react-i18next';

function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      number: 1,
      title: t('features.items.0.title'),
      description: t('features.items.0.description')
    },
    {
      number: 2,
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      number: 3,
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    }
  ];

  return (
    <section id='features' className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-24">
        {/* Hero section */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-12 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-800 md:text-xl">
              {t('features.subtitle')}
            </p>
          </div>
        </div>

        {/* Features cards */}
        <div className="relative z-10 -mt-12 grid gap-8 px-4 md:grid-cols-3 lg:-mt-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="transform rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl font-bold text-blue-800">
                {feature.number}
              </div>
              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;