import { Link } from "react-router-dom"

function Section6() {
  return (
    <section>
        <div className="container mt-16 mx-auto px-6 py-12">
            <h2 className="mb-4 text-center text-2xl font-bold sm:px-40 sm:text-5xl">Choisissez le plan idéal pour vos besoins en gestion des congés</h2>
            <p className="text-center text-lg text-[#6c757d] sm:mb-16">Rejoignez la communauté croissante d&apos;organisations qui améliorent leurs processus de congé avec Congease.</p>
            <div className="flex flex-col lg:flex-row">
                <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
                    <h4 className="mb-4 text-4xl font-semibold">Basique</h4>
                    <p className="mb-8 font-light text-[#212529] xl:text-xl">Commencez votre parcours avec un essai gratuit de 14 jours sans frais.Découvrez la simplicité de la gestion des demandes de congés.</p>
                    <p className="mb-2 text-6xl font-bold text-[#0f4c81]">$0</p>
                    <p className="mb-9 text-lg font-light uppercase text-[#212529]">Essai gratuit de 14 jours</p>
                    <Link to="/signup" className="mx-auto mb-11 block w-2/3 rounded border border-[#495057] bg-[#ffffff] py-4 font-semibold uppercase text-[#212529]">Commencez ce plan</Link>
                    <ul className="space-y-3 font-light">
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Jusqu&apos;à 5 000 utilisateurs</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Demandes de congés illimitées</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Analytique de base</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Gestion des rôles utilisateur</span>
                        </li>
                    </ul>
                </div>
                <div className="relative my-6 flex-1 rounded-3xl bg-[#0f4c81] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
                    <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded bg-black px-2 py-1 text-center text-xl font-semibold uppercase">Le plus populaire</div>
                    <h4 className="mb-4 text-4xl font-semibold">Professionnel</h4>
                    <p className="mb-8 font-light xl:text-xl">Déverrouillez tout le potentiel de Congease après votre essai gratuit. Découvrez une gestion fluide sans limitations.</p>
                    <p className="mb-3 text-6xl font-bold">$20</p>
                    <p className="mb-9 text-lg font-light uppercase">Abonnement mensuel</p>
                    <Link href="/signup" className="mx-auto mb-11 block w-2/3 rounded bg-white py-4 font-semibold uppercase text-[#000]">Choisir ce plan</Link>
                    <ul className="space-y-3 font-light text-white">
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4"></i>
                            <span className="text-left text-lg">Jusqu&apos;à 15 000 utilisateurs</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4"></i>
                            <span className="text-left text-lg">Analytique avancée</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4"></i>
                            <span className="text-left text-lg">Gestion personnalisée des rôles</span>
                        </li>
                    </ul>
                </div>
                <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
                    <h4 className="mb-4 text-4xl font-semibold">Enterprise</h4>
                    <p className="mb-8 font-light text-[#212529] xl:text-xl">Commencez dès aujourd&apos;hui avec un essai sans risque sans frais. Découvrez une gestion complète des congés pour votre toute votre organisation.</p>
                    <p className="mb-3 text-6xl font-bold text-[#0f4c81]">$99</p>
                    <p className="mb-9 text-lg font-light uppercase text-[#212529]">Essai gratuit de 14 jours</p>
                    <Link href="/signup" className="mx-auto mb-11 block w-2/3 rounded border border-[#495057] bg-[#ffffff] py-4 font-semibold uppercase text-[#212529]">Sélectionnez ce plan</Link>
                    <ul className="space-y-3 font-light">
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Utilisateurs illimités</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Gestion complète des rôles</span>
                        </li>
                        <li className="flex min-h-[28px] items-center">
                            <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[#0f4c81]"></i>
                            <span className="text-left text-lg text-[#212529]">Support prioritaire</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section6