import { Link } from "react-router-dom"

function Section4() {
  return (
    <section>
        <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
            <div className="flex flex-col-reverse items-stretch lg:flex-row">
                <div className="lg:w-1/2 lg:pr-20">
                    <h2 className="mb-4 text-center text-3xl font-bold sm:text-5xl lg:text-left">Améliorez la gestion des congés avec Congease</h2>
                    <p className="mb-6 text-center text-xl lg:text-left">Congease permet à votre organisation de gérer les demandes de congés avec une simplicité et une efficacité sans précédent. Notre plateforme assure que les employés peuvent soumettre leurs demandes de congés de manière intuitive, tandis que les RH peuvent superviser les approbations sans effort.</p>
                    <ul className="mb-12 list-disc pl-8 text-xl">
                        <li className="mb-3">Interface simplifiée pour des soumissions de congés sans effort</li>
                        <li className="mb-3">Flux d&apos;approbation rapide et transparent pour des réponses en temps opportun</li>
                        <li className="mb-3">Gestion des rôles complète pour un accès sécurisé des utilisateurs</li>
                        <li>Mesures de sécurité avancées qui protègent les données personnelles des employés</li>
                    </ul>
                    <div className="flex justify-center lg:block">
                        <Link to="/signup" className="mb-12 inline-block rounded bg-[#0f4c81] px-[12px] py-[8px] text-lg font-medium text-white hover:bg-[#093558]">Commencez votre essai gratuit !</Link>
                    </div>
                    <div className="flex items-center">
                        <img src="https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo=" alt="Profile" className="mr-4 h-[72px] w-[72px] rounded-full object-cover"/>
                        <div>
                            <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1" aria-hidden="true"></i>
                            <p className="mb-2 inline text-lg ">Congease a simplifié notre processus de gestion des congés, le rendant très facile pour les employés et les RH !</p>
                            <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1" aria-hidden="true"></i>
                            <p>
                                <span className="font-semibold ">Émilie Martin</span>
                                <span className="pl-2 font-semibold text-[#0f4c81]">(Responsable RH chez Future Tech)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex flex-1 items-center justify-center rounded- bg-[#e9f3fa] p-6 lg:w-1/2">
                    <img className="mx-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/reducing-employee-work-8758930-7099307.png" alt="Hero"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4