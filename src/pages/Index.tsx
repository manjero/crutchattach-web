
import React, { useState } from 'react';
import { Menu, X, Download, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-[#002db5]">
              CrutchAttach
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#002db5] transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-[#002db5] transition-colors">Features</a>
              <a href="#downloads" className="text-gray-700 hover:text-[#002db5] transition-colors">Downloads</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#002db5] transition-colors">Gallery</a>
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#002db5] hover:bg-blue-700"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-[#002db5] py-2">Home</a>
                <a href="#features" className="text-gray-700 hover:text-[#002db5] py-2">Features</a>
                <a href="#downloads" className="text-gray-700 hover:text-[#002db5] py-2">Downloads</a>
                <a href="#gallery" className="text-gray-700 hover:text-[#002db5] py-2">Gallery</a>
                <Button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#002db5] hover:bg-blue-700 w-full mt-2"
                >
                  Contact
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section id="home" className="relative bg-[#002db5] min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002db5] to-blue-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                CrutchAttach
              </h1>
              <p className="text-xl lg:text-2xl mb-4">
                Magnetic Forearm Crutch Holder
              </p>
              <p className="text-lg mb-8 opacity-90">
                3D Printed. Open Sourced.
              </p>
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#002db5] hover:bg-gray-100 px-8 py-3 text-lg"
              >
                I need one
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/f061a7b7-3a77-4996-b6c7-f763be4f56ad.png"
                alt="CrutchAttach in use"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <section className="bg-[#d9d9d9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#002db5]">
            Made with the wounded for the wounded.
          </h2>
        </div>
      </section>

      {/* Intuitive Usage Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002db5] mb-6">
                Intuitive usage.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                CrutchAttach enables users to bind their crutches together into one, freeing up a hand for daily tasks — from using a stair rail to grabbing a cup of coffee.
              </p>
            </div>
            <div className="bg-[#d9d9d9] h-64 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Person using CrutchAttach"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-[#002db5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 h-64 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="3D printed CrutchAttach"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Open Sourced.
              </h2>
              <p className="text-lg mb-6 opacity-90">
                CrutchAttach is designed to be 3D printed anywhere, by anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002db5] mb-6">
                Validated.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                CrutchAttach was developed with and for the wounded and is still under constant improvement.
              </p>
            </div>
            <div className="bg-[#d9d9d9] h-64 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Validation testing"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schematics Section */}
      <section className="py-20 bg-[#d9d9d9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002db5] mb-12">
            Our instructions are made easy!
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
              alt="Assembly instructions"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">Technical schematics and assembly guide</p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 bg-[#002db5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Downloads
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">3D files can be found here!</h3>
              <Button className="bg-white text-[#002db5] hover:bg-gray-100">
                Download Files
              </Button>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Detailed guidelines here!</h3>
              <Button className="bg-white text-[#002db5] hover:bg-gray-100">
                View Instructions
              </Button>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <Mail className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Don't have access to 3D printing? Contact us!</h3>
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#002db5] hover:bg-gray-100"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002db5] mb-12">
            Meet our contributors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#002db5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SZ</span>
              </div>
              <h3 className="font-bold text-lg">Shadez Z.</h3>
              <p className="text-gray-600">Contributor</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#002db5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">YA</span>
              </div>
              <h3 className="font-bold text-lg">Yoattan A.</h3>
              <p className="text-gray-600">Designer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#002db5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AR</span>
              </div>
              <h3 className="font-bold text-lg">Amiran R.</h3>
              <p className="text-gray-600">Validator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#d9d9d9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#002db5] mb-12 text-center">
            Global Impact Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`https://images.unsplash.com/photo-${1506744038136 + index}-46273834b3fb`}
                  alt={`User ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002db5] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CrutchAttach</h3>
              <p className="opacity-90">
                Join our community: crutchattach@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get social</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">ig</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">yt</span>
                </div>
              </div>
            </div>
            <div>
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#002db5] hover:bg-gray-100"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 CrutchAttach. Open source project.</p>
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default Index;
