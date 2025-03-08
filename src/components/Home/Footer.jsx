
function Footer() {
  return (
    <div>
        <footer className="pb-8 pt-2">
            <div className="container mx-auto px-4 text-center">
                <div className="m-8 text-xl font-bold">
                    <a href="/" className="text-3xl text-[#0f4c81]">Congease</a>
                </div>
                <div className="mb-8 flex flex-col justify-center sm:flex-row">
                    <a href="/" className="mx-8 text-base text-[#6c757d] hover:text-[#0f4c81]">Home</a>
                    <a href="#AboutSection" className="mx-8 text-base text-[#6c757d] hover:text-[#0f4c81]">How It Works</a>
                    <a href="#FeaturesSection" className="mx-8 text-base text-[#6c757d] hover:text-[#0f4c81]">Features</a>
                    <a href="/faq" className="mx-8 text-base text-[#6c757d] hover:text-[#0f4c81]">FAQ</a>
                    <a href="/contact" className="mx-8 text-base text-[#6c757d] hover:text-[#0f4c81]">Contact Us</a>
                </div>
                <p className="text-base text-[#6c757d]">© 2025 Congease. All Rights Reserved</p>
                </div>
        </footer>
    </div>
  )
}

export default Footer