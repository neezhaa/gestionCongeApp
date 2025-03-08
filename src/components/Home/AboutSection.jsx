import { Link } from "react-router-dom"

function AboutSection() {
  return (
    <section id="AboutSection">
        <div className="container mx-auto px-6 lg:pt-24">
            <div className="flex flex-col items-stretch lg:flex-row">
                <div className="flex flex-1 items-center justify-center rounded-3xl bg-[#e9f3fa] p-6 lg:w-1/2">
                <img className="mx-auto rounded-3xl" src="https://cdni.iconscout.com/illustration/premium/thumb/annual-leave-7708496-6214480.png" alt="Hero" data-landingsite-gallery-type="illustration" data-media="{&quot;id&quot;:&quot;1fbc4d20-a61b-11ed-b4e8-0242ac140003&quot;,&quot;src&quot;:&quot;iconscout&quot;,&quot;type&quot;:&quot;illustration&quot;}"/>
                </div>
                <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
                    <h2 className="mb-4 text-center text-2xl font-bold lg:text-left lg:text-4xl">Révolutionnez la Gestion de Vos Congés</h2>
                    <p className="mb-4 text-center text-lg text-[#212529] lg:text-left">GestionCongeApp simplifie la gestion des congés, permettant aux employés et aux équipes RH de collaborer facilement.</p>
                    <ul className="mb-6 list-disc pl-6 text-lg">
                        <li className="mb-1">Interface conviviale pour des demandes de congés sans tracas</li>
                        <li className="mb-1">Processus d&apos;approbation fluide pour des réponses rapides</li>
                        <li className="mb-1">Gestion complète des rôles pour un contrôle d&apos;accès sécurisé</li>
                        <li>Protection robuste des données pour sécuriser les informations sensibles des employés</li>
                    </ul>
                    <div className="flex justify-center lg:block">
                        <Link to="/signup" className="mb-12 inline-block rounded bg-[#0f4c81] px-[12px] py-[8px] text-lg font-medium text-white hover:bg-[#093558]">Démarrez votre Essai Gratuit !</Link>
                    </div>
                    <div className="flex items-center">
                        <img src="https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig=" alt="Profile" className="mr-4 h-[72px] w-[72px] rounded-full object-cover"/>
                        <div>
                            <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1" aria-hidden="true"></i>
                            <p className="mb-2 inline text-lg text-[#212529]">Congease a simplifié notre processus de gestion des congés, le rendant très facile pour les employés et les RH !</p>
                            <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1" aria-hidden="true"></i>
                            <p>
                                <span className="font-semibold text-[#212529]">Imane Karem</span>
                                <span className="pl-2 font-semibold text-[#0f4c81]">(Responsable des Opérations chez Tech Innovations)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection