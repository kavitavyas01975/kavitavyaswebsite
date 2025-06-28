import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  Star, 
  Quote,
  ChevronUp,
  Menu,
  X,
  Users,
  Clock,
  Video,
  FileText,
  Phone,
  Mail,
  Globe,
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    window.open('https://forms.gle/nH8rGQX6RxgnP5Z57', '_blank');
  };

  const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'Hong Kong', flag: '🇭🇰' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Romania', flag: '🇷🇴' },
    { name: 'Abu Dhabi', flag: '🇦🇪' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 font-['Open_Sans']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
              <span className="text-lg sm:text-xl font-bold text-blue-900 font-['Lora']">Kavita Vyas Hindi Coaching</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'services', label: 'Courses' },
                { id: 'gallery', label: 'Global Reach' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-blue-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-blue-700 hover:text-orange-600 hover:bg-orange-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'services', label: 'Courses' },
                { id: 'gallery', label: 'Global Reach' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-blue-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-300 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-orange-300 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 font-['Lora'] leading-tight px-2">
              आत्मविश्वास के साथ हिंदी में निपुणता प्राप्त करें<br />
              <span className="text-orange-600">सरल और प्रभावी तरीके से हिंदी सीखें</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-700 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              सभी बोर्ड (CBSE, ICSE, State Boards) और सभी कक्षाओं के लिए व्यापक हिंदी कक्षाएं।
              <br className="hidden sm:block" />
              विशेषज्ञ मार्गदर्शन के साथ मजबूत आधार बनाएं और अपनी हिंदी परीक्षाओं में उत्कृष्टता प्राप्त करें।
            </p>
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base lg:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 mx-4"
            >
              <span>मुफ़्त डेमो क्लास बुक करें | Book Free Demo Class</span>
              <ExternalLink size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-['Lora']">
              Meet Your Teacher | आपकी शिक्षिका से मिलें
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-orange-200">
                <img 
                  src="src\assets\WhatsApp Image 2025-06-28 at 20.06.47_b55172d8.jpg" 
                  alt="Kavita Vyas - Hindi Teacher"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 font-['Lora'] mb-4 text-center lg:text-left">
                Kavita Vyas | कविता व्यास
              </h3>
              <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                नमस्ते! मैं कविता व्यास हूँ, एक समर्पित और अनुभवी हिंदी शिक्षिका जो हिंदी को सभी स्तरों के छात्रों के लिए सुलभ और आनंददायक बनाने का जुनून रखती हूँ। पिछले 10+ वर्षों में, मैंने सैकड़ों छात्रों को हिंदी में आत्मविश्वास बनाने और उनकी बोर्ड परीक्षाओं में उत्कृष्ट परिणाम प्राप्त करने में मदद की है।
              </p>
              <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                मेरा मानना है कि सही मार्गदर्शन से कोई भी छात्र हिंदी में आत्मविश्वास हासिल कर सकता है। My teaching methodology is interactive, comprehensive, and completely aligned with the latest board curricula across all educational boards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-lg">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-900 text-xs sm:text-sm">10+ Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-lg">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-900 text-xs sm:text-sm">BSc Science, MA Sociology</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-900 text-xs sm:text-sm">All Boards Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-['Lora']">
              Our Courses | हमारे कोर्सेस
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 text-white">
                <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold font-['Lora']">Primary Classes</h3>
                <p className="text-blue-100 text-sm sm:text-base">Classes 1-5 | कक्षा 1-5</p>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-blue-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Foundation building in Hindi language with focus on reading, writing, and basic grammar concepts. Perfect for young learners starting their Hindi journey.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Interactive Live Classes</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Recorded Sessions</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Fun Activities & Worksheets</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Story Reading Sessions</span>
                  </li>
                </ul>
                <button 
                  onClick={handleCTAClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Learn More | और जानें</span>
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 sm:p-6 text-white">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold font-['Lora']">Secondary Classes</h3>
                <p className="text-orange-100 text-sm sm:text-base">Classes 6-10 | कक्षा 6-10</p>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-blue-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Comprehensive Hindi curriculum covering literature, grammar, and composition for middle and high school students across all boards.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Board-Specific Classes</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Literature Analysis</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Grammar & Composition</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Exam Preparation</span>
                  </li>
                </ul>
                <button 
                  onClick={handleCTAClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Learn More | और जानें</span>
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 sm:p-6 text-white">
                <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold font-['Lora']">Senior Secondary</h3>
                <p className="text-green-100 text-sm sm:text-base">Classes 11-12 | कक्षा 11-12</p>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-blue-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Advanced Hindi courses for senior secondary students with focus on board exam preparation, literature appreciation, and advanced writing skills.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Board Exam Focus</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Mock Tests & Papers</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Individual Attention</span>
                  </li>
                  <li className="flex items-center text-blue-600 text-sm sm:text-base">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500" />
                    <span>Literature Deep Dive</span>
                  </li>
                </ul>
                <button 
                  onClick={handleCTAClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Learn More | और जानें</span>
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Countries */}
      <section id="gallery" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-['Lora']">
              Global Reach | विश्वव्यापी पहुंच
            </h2>
            <p className="text-lg sm:text-xl text-blue-700 mb-6">
              Kavita Ma'am has taught students from these countries
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
            {countries.map((country, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                    {country.flag}
                  </div>
                  <p className="text-xs font-semibold text-blue-900">{country.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl p-6 sm:p-8 shadow-lg">
              <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 font-['Lora']">
                Teaching Students Worldwide | विश्वभर के छात्रों को पढ़ाना
              </h3>
              <p className="text-blue-700 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                With online classes, Kavita Ma'am has successfully connected with Hindi learners across the globe, 
                helping students maintain their cultural roots and excel in Hindi language regardless of their location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-['Lora']">
              Student Reviews | हमारे छात्र क्या कहते हैं
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-4" />
              <p className="text-blue-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                "Kavita ma'am made Hindi so interesting for me! Her teaching style is amazing and she explains everything so clearly. I improved from 65% to 92% in Hindi thanks to her guidance. Highly recommend her classes!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-blue-900 text-sm sm:text-base">Priya Sharma</p>
                  <p className="text-blue-600 text-xs sm:text-sm">Class 10, CBSE</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-4" />
              <p className="text-blue-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                "मेरे बेटे को हिंदी में बहुत कठिनाई होती थी। Kavita ji के classes के बाद उसका confidence बढ़ गया है और अब वह Hindi में अच्छे marks ला रहा है। Very patient and caring teacher!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-blue-900 text-sm sm:text-base">Rakesh Gupta</p>
                  <p className="text-blue-600 text-xs sm:text-sm">Parent of Aman Gupta, Class 8, ICSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-['Lora']">
            Start Your Hindi Learning Journey Today!<br />
            <span className="text-orange-300">अपनी हिंदी सीखने की यात्रा आज ही शुरू करें!</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-blue-100 px-4">
            Ready to excel in Hindi and build confidence in the language? Take the first step towards success with personalized guidance and expert teaching.
          </p>
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl mb-6 sm:mb-8 inline-flex items-center space-x-3 mx-4"
          >
            <span>Yes, I Want a Free Demo! | हाँ, मुझे मुफ़्त डेमो चाहिए!</span>
            <ExternalLink size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
              <span className="text-sm sm:text-base">+91 9967514293</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
              <span className="text-sm sm:text-base">kavitavyas01975@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                <span className="text-lg sm:text-xl font-bold font-['Lora']">Kavita Vyas Hindi Coaching</span>
              </div>
              <p className="text-blue-200 leading-relaxed mb-4 text-sm sm:text-base">
                Empowering students worldwide to master Hindi with confidence. Expert guidance for all boards and standards with personalized attention and proven teaching methods.
              </p>
              <p className="text-blue-300 text-xs sm:text-sm">
                विश्वभर के छात्रों को आत्मविश्वास के साथ हिंदी में निपुणता प्राप्त करने में सहायता करना।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-orange-300">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-blue-200 hover:text-orange-300 transition-colors text-sm sm:text-base"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-blue-200 hover:text-orange-300 transition-colors text-sm sm:text-base"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-blue-200 hover:text-orange-300 transition-colors text-sm sm:text-base"
                  >
                    Global Reach
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-blue-200 hover:text-orange-300 transition-colors text-sm sm:text-base"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-orange-300">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                  <span className="text-blue-200 text-sm sm:text-base">+91 9967514293</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                  <span className="text-blue-200 text-xs sm:text-sm">kavitavyas01975@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                  <span className="text-blue-200 text-xs sm:text-sm">Online Classes Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-blue-300 text-xs sm:text-sm">
                © 2024 Kavita Vyas Hindi Coaching. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-blue-300 text-xs sm:text-sm">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                <span>Made with love for Hindi learners worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}

export default App;