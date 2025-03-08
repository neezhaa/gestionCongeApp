import { Link } from "react-router-dom"

function CTASection() {
    return (
      <section id='CTASection' className="my-12 bg-[#e9f3fa] py-6" >
          <div className="container mx-auto flex flex-col sm:flex-row">
              <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-have-no-annual-leave-to-rest-from-hard-work-12513375-10207361.png" alt="CTA" className="h-auto w-full"/>
              </div>
              <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
                  <h3 className="mb-2 text-center text-2xl font-bold sm:text-left sm:text-5xl">Optimisez la gestion des congés avecCongease</h3>
                  <p className="mb-12 text-center text-base text-[#6c757d] sm:text-left sm:text-lg">
                        Simplifiez la soumission et le traitement des demandes de congés avec notre application intuitive.
                        Profitez d&apos;une expérience utilisateur fluide où chaque employé peut facilement gérer ses demandes pendant que les responsables RH peuvent approuver les congés en un clic. 
                        Prêt à révolutionner la manière dont vous gérez les congés au sein de votre entreprise ?</p>
                  <div className="mb-12 flex items-center justify-center md:items-start md:justify-start">
                      <Link to="/signup" className="items-center rounded bg-[#0f4c81] px-[12px] py-[8px] text-lg font-semibold text-white hover:bg-[#093558]">Démarrez votre essai gratuit dès aujourd&apos;hui</Link>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default CTASection