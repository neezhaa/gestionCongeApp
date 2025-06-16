 import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation();

    return (
        <section id="AboutSection">
            <div className="container mx-auto px-6 lg:pt-24">
                <div className="flex flex-col items-stretch lg:flex-row">
                    <div className="flex flex-1 items-center justify-center rounded-3xl bg-[#e9f3fa] p-6 lg:w-1/2">
                    <img className="mx-auto rounded-3xl" src="https://cdni.iconscout.com/illustration/premium/thumb/annual-leave-7708496-6214480.png" alt="Hero" data-landingsite-gallery-type="illustration" data-media="{&quot;id&quot;:&quot;1fbc4d20-a61b-11ed-b4e8-0242ac140003&quot;,&quot;src&quot;:&quot;iconscout&quot;,&quot;type&quot;:&quot;illustration&quot;}"/>
                    </div>
                    <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-20">
                        <h2 className="mb-4 text-center text-2xl font-bold lg:text-left lg:text-4xl">{t('about.title')}</h2>
                        <p className="mb-4 text-center text-lg text-[#212529] lg:text-left">{t('about.description')}</p>
                        <ul className="mb-6 list-disc pl-6 text-lg">
                            <li className="mb-1">{t('about.features.0')}</li>
                            <li className="mb-1">{t('about.features.1')}</li>
                            <li className="mb-1">{t('about.features.2')}</li>
                            <li>{t('about.features.3')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;