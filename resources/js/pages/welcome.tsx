// src/pages/Home.jsx
export default function Home() {
  const showTestimonial = (slideNumber: number) => {
    // Hide all slides
    document.querySelectorAll('.testimonial-slide').forEach(slide => {
        slide.classList.remove('active');
    });

    // Show selected slide
    const targetSlide = document.getElementById('testimonial-' + slideNumber);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }

    // Update dots
    document.querySelectorAll('.dot-nav').forEach(dot => {
        dot.classList.remove('active', 'bg-teal-500');
        dot.classList.add('bg-gray-300');
    });

    const targetDot = document.querySelector('[data-slide="' + slideNumber + '"]');
    if (targetDot) {
        targetDot.classList.add('active', 'bg-teal-500');
        targetDot.classList.remove('bg-gray-300');
    }
};


    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 bg-[#EEF5F8] shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/Icon.png"
              alt="Aphrodite Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="px-3 py-1 text-[#519DBC] font-[400] uppercase tracking-wide text-lg font-marcellus">
              Aphrodite
            </h1>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a
              href="#home"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
                        after:content-[''] after:absolute after:-top-2 after:left-0 
                        after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              HOME
            </a>
            <a
              href="#about"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
                        after:content-[''] after:absolute after:-top-2 after:left-0 
                        after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
                        after:content-[''] after:absolute after:-top-2 after:left-0 
                        after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SERVICE
            </a>
            <a
              href="#pages"
              className="relative text-gray-500 hover:text-[#519DBC] font-medium cursor-pointer 
                        after:content-[''] after:absolute after:-top-2 after:left-0 
                        after:w-full after:h-[2px] after:bg-[#519DBC] after:opacity-0 hover:after:opacity-100 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pages')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              PAGES
            </a>
          </nav>

          {/* Icon kanan */}
          <div className="flex items-center gap-4">
            {/* Phone Icon - matching Figma design */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#519DBC] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <svg className="w-6 h-6 text-[#519DBC]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden w-10 h-10 bg-white rounded-full flex flex-col justify-center items-center gap-1 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#519DBC] rounded-full"></span>
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/woman-pic.png')" }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent lg:from-white/30 lg:via-white/10 lg:to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 relative z-10">
            <div className="flex items-center min-h-[500px] lg:min-h-[600px]">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 space-y-8 text-left">
                <div className="space-y-6">
                  <p className="text-[#519DBC] font-medium uppercase tracking-wide text-sm font-lato">
                    THE BEAUTY CENTER
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900" style={{ fontFamily: 'Marcellus, sans-serif', fontSize: '90px' }}>
                    Suitable For All<br />Skin Problems
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    {/* Button */}
                    <button className="bg-transparent border-2 border-[#519DBC] text-[#519DBC] px-10 py-4 rounded-full font-medium hover:bg-[#519DBC] hover:text-white transition-all duration-300 flex items-center gap-2 font-lato">
                      BOOK NOW
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* OR */}
                    <span className="text-gray-600 font-medium text-lg font-lato flex items-center">
                      OR
                    </span>

                    {/* Play Button */}
                    <div className="w-16 h-16 bg-[#519DBC] rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors shadow-lg">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5z" />
                      </svg>
                    </div>
                  </div>
                  <p 
                    className="font-lato font-light text-[20px] leading-relaxed max-w-lg pt-2"  
                    style={{ color: '#5C5C5C' }}
                  >
                    Care for skin and natural beauty through professional treatments using natural products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="px-4 sm:px-8 py-16 sm:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Beauty Rituals Of Our Offer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Service 1 - Facial Treatments */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H19V9Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Facial Treatments</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                  LEARN MORE
                </button>
              </div>

              {/* Service 2 - Skin Tightening */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM8 21L9.5 16.5L14 18L9.5 19.5L8 21ZM16 8L17.5 3.5L22 5L17.5 6.5L16 8Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Skin Tightening</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                  LEARN MORE
                </button>
              </div>

              {/* Service 3 - Healthy Products */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7H18V6C18 3.79 16.21 2 14 2H10C7.79 2 6 3.79 6 6V7H5C3.9 7 3 7.9 3 9V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V9C21 7.9 20.1 7 19 7ZM10 4H14C15.1 4 16 4.9 16 6V7H8V6C8 4.9 8.9 4 10 4ZM19 20H5V9H19V20ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Healthy Products</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="px-4 sm:px-8 py-16 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
              
              {/* Left Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm">
                    ABOUT US
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 font-serif">
                    Crafting Beauty<br />Beyond Boundaries
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                  <button className="bg-blue-400 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors flex items-center gap-2">
                    DISCOVER MORE
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Images */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-lg">
                  {/* Blue background shape */}
                  <div className="absolute top-4 sm:top-10 right-0 w-64 sm:w-80 h-48 sm:h-72 bg-blue-400 rounded-3xl"></div>
                  
                  <div className="relative z-10 space-y-4 sm:space-y-6 ml-4 sm:ml-8">
                    {/* Top row - 2 images side by side */}
                    <div className="flex gap-2 sm:gap-4 justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop"
                        alt="Facial treatment with mask"
                        className="w-32 sm:w-40 lg:w-48 h-24 sm:h-30 lg:h-36 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop"
                        alt="LED light therapy treatment"
                        className="w-32 sm:w-40 lg:w-48 h-24 sm:h-30 lg:h-36 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                      />
                    </div>
                    
                    {/* Bottom row - 1 image centered */}
                    <div className="flex justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop"
                        alt="Beauty treatment"
                        className="w-32 sm:w-40 lg:w-48 h-24 sm:h-30 lg:h-36 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-400 px-4 sm:px-8 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center text-white">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">20+</h3>
                <p className="text-sm opacity-90">Years Of Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">769+</h3>
                <p className="text-sm opacity-90">Satisfied Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">16+</h3>
                <p className="text-sm opacity-90">Skin Treatments</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-sm opacity-90">Trusted Experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Doctors Section */}
        <section className="px-4 sm:px-8 py-16 sm:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm mb-6 sm:mb-8">
                MEET THE DOCTORS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-serif">
                Discover Our Experts
              </h2>
            </div>
            
            {/* Doctors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Doctor Card */}
              {[
                {
                  name: "Dr. Hannah Wagner",
                  role: "PLASTIC SURGEON",
                  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face",
                  highlight: false
                },
                {
                  name: "Dr. Bryan Hunter",
                  role: "ANESTHESIOLOGIST",
                  img: "https://i.pinimg.com/736x/47/08/d3/4708d309ff41ee3b3109056ba24e733d.jpg",
                  highlight: true
                },
                {
                  name: "Dr. Sarah Nelson",
                  role: "DERMATOLOGIST",
                  img: "https://i.pinimg.com/736x/0d/d0/97/0dd09727d2c91e9b0072f59317854f50.jpg",
                  highlight: false
                }
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 cursor-pointer group"
                >
                  <div
                    className={`relative mx-auto w-48 h-56 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105
                      border-2 border-transparent group-hover:border-teal-500 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]
                    `}
                  >
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                  </div>

                  <div className="space-y-1">
                    <p
                      className={`text-sm font-medium uppercase ${
                        doc.highlight ? "text-teal-500" : "text-gray-400"
                      }`}
                    >
                      {doc.role}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Brand Logos Section */}
        <section className="px-8 py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Scrollable container */}
            <div className="relative overflow-hidden">
              <div className="flex gap-12 items-center opacity-40 animate-scroll">
                {/* Logo 1 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">TECHBRAND</text>
                  </svg>
                </div>
                
                {/* Logo 2 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">MEDTECH</text>
                  </svg>
                </div>
                
                {/* Logo 3 - Center with teal color */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <span className="text-teal-500 font-bold text-lg">APHRODITE</span>
                  </div>
                </div>
                
                {/* Logo 4 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">BEAUTYCO</text>
                  </svg>
                </div>
                
                {/* Logo 5 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">SKINCARE</text>
                  </svg>
                </div>

                {/* Logo 6 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">WELLNESS</text>
                  </svg>
                </div>

                {/* Logo 7 */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">GLOW</text>
                  </svg>
                </div>

                {/* Duplicate logos for seamless loop */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="10" y="30" className="text-lg font-bold">TECHBRAND</text>
                  </svg>
                </div>
                
                <div className="flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-12 text-gray-400" viewBox="0 0 120 48" fill="currentColor">
                    <text x="15" y="30" className="text-lg font-bold">MEDTECH</text>
                  </svg>
                </div>
                
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <span className="text-lg sm:text-xl font-marcellus text-teal-600 tracking-wide">APHRODITE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready To Glow Contact Section */}
        <section id="contact" className="px-4 sm:px-8 py-16 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
              
              {/* Left Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-80 lg:h-auto">
                  <img
                    src="https://i.pinimg.com/736x/5a/40/ba/5a40ba49ad82f530dc3cf330733c6298.jpg"
                    alt="Beauty consultation"
                    className="w-full h-full object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none shadow-xl"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors shadow-lg">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-blue-400 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden h-full min-h-[400px] lg:min-h-0">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-300 rounded-full opacity-30 -translate-y-4 sm:-translate-y-8 translate-x-4 sm:translate-x-8"></div>
                  
                  <div className="relative z-10 space-y-6 sm:space-y-8 h-full flex flex-col justify-center">
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-serif text-white">
                        Ready To Glow<br />With Us
                      </h2>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Name"
                          className="bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 backdrop-blur-sm"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Daily Appointment"
                          className="bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 backdrop-blur-sm"
                        />
                        <input
                          type="text"
                          placeholder="Type of Service"
                          className="bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                          BOOK NOW
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-8 py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm mb-4">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl font-bold text-gray-800 font-serif">
                From Our Satisfied Client
              </h2>
            </div>

            {/* Testimonial Carousel */}
            <div className="relative">
              {/* Testimonial 1 */}
              <div id="testimonial-1" className="testimonial-slide active">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-teal-500 font-medium uppercase text-sm mt-4">
                        FACIAL TREATMENT CLIENT
                      </p>
                    </div>
                    <div className="mb-8">
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "Amazing results! My skin has never looked better. The facial treatment was relaxing and professional. Highly recommend!"
                      </p>
                    </div>
                    <div className="flex justify-center mb-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Laura Johnson</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div id="testimonial-2" className="testimonial-slide">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-pink-500 font-medium uppercase text-sm mt-4">
                        SKINCARE CLIENT
                      </p>
                    </div>
                    <div className="mb-8">
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "The best skincare experience I've ever had. Staff is knowledgeable and the results speak for themselves!"
                      </p>
                    </div>
                    <div className="flex justify-center mb-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Sarah Mitchell</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div id="testimonial-3" className="testimonial-slide">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-purple-500 font-medium uppercase text-sm mt-4">
                        BEAUTY TREATMENT CLIENT
                      </p>
                    </div>
                    <div className="mb-8">
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "Professional service with outstanding results. I feel more confident than ever. Thank you APHRODITE!"
                      </p>
                    </div>
                    <div className="flex justify-center mb-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Emma Davis</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button 
                  className="w-3 h-3 bg-teal-500 rounded-full dot-nav active" 
                  onClick={() => showTestimonial(1)}
                  data-slide="1"
                ></button>
                <button 
                  className="w-3 h-3 bg-gray-300 rounded-full dot-nav" 
                  onClick={() => showTestimonial(2)}
                  data-slide="2"
                ></button>
                <button 
                  className="w-3 h-3 bg-gray-300 rounded-full dot-nav" 
                  onClick={() => showTestimonial(3)}
                  data-slide="3"
                ></button>
              </div>
            </div>
          </div>

        </section>

        {/* Blog Section */}
        <section className="px-8 py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-16">
              <div>
                <p className="text-teal-500 font-semibold uppercase tracking-wide text-sm mb-4">
                  FEATURED POST
                </p>
                <h2 className="text-4xl font-bold text-gray-800 font-serif">
                  From Our Blog
                </h2>
              </div>
              <button className="bg-blue-400 text-white border-2 border-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-colors">
                DISCOVER MORE
              </button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured Post */}
              <a 
                href="/blog/unlocking-secrets-glowing-skin" 
                className="block space-y-6 group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop"
                    alt="Skincare treatment"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                    Unlocking The Secrets To Glowing Skin : Essential Skincare Tips
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Sarah Bright</span>
                    <span>30 January 2024</span>
                    <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full">Tips</span>
                  </div>
                </div>
              </a>

              {/* Side Posts */}
              <div className="space-y-8">
                {/* Post 1 */}
                <a 
                  href="/blog/revealing-beauty-within" 
                  className="flex gap-4 group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=200&fit=crop"
                      alt="Beauty treatment"
                      className="w-32 h-24 object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-800 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                      Revealing The Beauty Within
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Sarah Bright</span>
                      <span>30 Jan 24</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Treatment</span>
                    </div>
                  </div>
                </a>

                {/* Post 2 */}
                <a 
                  href="/blog/new-agent-skincare" 
                  className="flex gap-4 group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=300&h=200&fit=crop"
                      alt="Skincare products"
                      className="w-32 h-24 object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-800 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                      The New Agent Of Skincare In...
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Sarah Bright</span>
                      <span>30 Jan 24</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Skincare</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-400 text-white">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Brand Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-wide">APHRODITE</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">We're Open At</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Monday - Friday : 09:00 AM - 20:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Saturday - Sunday : 09:00 AM - 18:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get In Touch With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-white/90">info@aphrodite.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-white/90">Victoria Street, London, United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/20 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Social Media */}
                <div className="flex items-center gap-4">
                  <span className="text-white/80 text-sm">Follow us:</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">FB</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">IG</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm font-bold">LI</span>
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                  <p className="text-white/70 text-sm">
                    Copyright © 2025 Aphrodite. All Rights Reserved.
                  </p>
                </div>

                {/* Terms */}
                <div>
                  <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }