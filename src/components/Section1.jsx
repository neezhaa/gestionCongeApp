import { Link } from "react-router-dom"

function Section1() {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#e9f3fa] lg:py-2">
        <div className="container mx-auto mb-24 px-6">
            <div className="flex flex-col-reverse items-center lg:flex-row">
                <div className="mt-6 w-full lg:mt-16 lg:w-[45%] lg:pr-14">
                    <h1 className="mb-4 text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-6xl">Optimisez la gestion de vos congés efficacement</h1>
                    <p className="mb-12 text-center text-xl text-[#212529] lg:text-left">Avec Congease, facilitez les demandes de congés sans effort. Notre plateforme permet aux employés de soumettre leurs demandes de congés avec simplicité, tandis que les ressources humaines peuvent examiner et gérer les approbations en toute facilité.</p>
                    <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
                        <Link to="/signup" className="items-center rounded bg-[#0f4c81] px-[12px] py-[8px] text-lg font-semibold text-white hover:bg-[#093558]">Inscrivez-vous maintenant</Link>
                    </div>
                    <div className="flex items-center pb-10">
                        <img src="https://media.gettyimages.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=Oxn1hxRZ43vNbYcRlsKQs0Wa8zT344VOIJfGbd_qMtY=" alt="Utilisateur satisfait" className="mr-4 h-[72px] w-[72px] rounded-full object-cover"/>
                        <div>
                        <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"></i>
                        <p className="mb-2 inline text-lg text-[#212529]">Congease a transformé notre processus de gestion des congés, le rendant efficace et convivial pour tous les utilisateurs.</p>
                            <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"></i>
                        <p>
                            <span className="font-semibold text-[#212529]">Alice Dupont</span>
                            <span className="pl-2 font-semibold text-[#0f4c81]">(Directrice RH chez Innovations Corp)</span>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empowering-families-and-importance-of-parental-leave-12506986-10420680.png" alt="Héros" className="mt-8 max-h-[200px] lg:max-h-[500px] h-auto w-auto object-contain lg:mt-0"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1