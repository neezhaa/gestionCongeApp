import { Link } from "react-router-dom"

function Section6() {
    return (
      <section>
          <div className="container mx-auto px-4 py-12">
              <h2 className="mb-6 text-center text-2xl font-bold sm:text-5xl">Découvrez nos derniers articles</h2>
              <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-[#6c757d] sm:text-xl">Plongez dans nos articles éclairants qui vont transformer votre approche de la gestion des congés. Chaque texte est conçu pour vous informer sur les meilleures pratiques, les stratégies innovantes et les outils efficaces pour optimiser la gestion des congés au sein de votre entreprise.</p>
              <div className="flex flex-col md:flex-row">
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                      <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7cc61d7a-de0b-4ffa-2dab-8ef71522b700/public" alt="Blog" className="h-64 w-full rounded-3xl object-cover"/>
                      <div className="px-4 py-6">
                          <p className="mb-2 uppercase text-sm text-[#0f4c81]">15 FÉV 2023</p>
                          <h3 className="mb-2 text-xl font-medium">Optimiser les demandes de congés : astuces et conseils</h3>
                          <p className="mb-4 text-base font-light text-[#6c757d]">Découvrez comment rationaliser vos processus de demande de congé et améliorer la satisfaction des employés avec des informations pratiques qui font la différence.</p>
                          <Link to="/features" className="flex items-center text-sm uppercase text-[#0f4c81] hover:underline">
                              Explorer davantage 
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                          </Link>
                      </div>
                  </div>
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                      <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5cb875c0-471c-49e7-02ee-cc5ad1e17d00/public" alt="Blog" className="h-64 w-full rounded-3xl object-cover"/>
                      <div className="px-4 py-6">
                          <p className="mb-2 uppercase text-sm text-[#0f4c81]">20 FÉV 2023</p>
                          <h3 className="mb-2 text-xl font-medium">Exploiter la technologie pour une gestion efficace des congés</h3>
                          <p className="mb-4 text-base font-light text-[#6c757d]">Découvrez comment les technologies émergentes peuvent améliorer votre système de gestion des congés, garantissant une expérience fluide pour les RH et les employés.</p>
                          <Link to="/how-it-works" className="flex items-center text-sm uppercase text-[#0f4c81] hover:underline">
                              En savoir plus 
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                          </Link>
                      </div>
                  </div>
                  <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
                      <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6e10a1ed-3db6-4866-66e5-b2d3aca38000/public" alt="Blog" className="h-64 w-full rounded-3xl object-cover"/>
                      <div className="px-4 py-6">
                          <p className="mb-2 uppercase text-sm text-[#0f4c81]">25 FÉV 2023</p>
                          <h3 className="mb-2 text-xl font-medium">Meilleures pratiques pour gérer les congés des employés</h3>
                          <p className="mb-4 text-base font-light text-[#6c757d]">Découvrez les stratégies clés que les meilleures organisations utilisent pour gérer efficacement les congés des employés, assurant conformité et satisfaction des employés.</p>
                          <Link to="/faq" className="flex items-center text-sm uppercase text-[#0f4c81] hover:underline">
                              Lire la suite 
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Section6