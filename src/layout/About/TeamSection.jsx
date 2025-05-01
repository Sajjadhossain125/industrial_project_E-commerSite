import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'H. Merinda',
    role: 'CEO & Co-Founder',
    image: './src/assets/images/about/Main.png', // replace with your actual path
  },
  {
    name: 'Dilan Specter',
    role: 'Head Engineer',
    image: './src/assets/images/about/main2.png', // replace with your actual path
  },
];

const TeamSection = () => {
  return (
    <section className="w-full flex justify-center py-16 px-6 bg-white">
      <div className="w-full max-w-[1340px]">
        <div className="text-center mb-10">
          <p className="text-green-600 text-sm font-medium">Our Team</p>
          <h2 className="text-3xl font-bold mb-2">Meet Our Expert Team</h2>
          <div className="w-16 h-1 bg-green-300 mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Proin ullamcorper pretium orci. Donec nec scelerisque risus leo. Nam massa dolor imperdiet nec consectetur
              congue id sem. Maecenas malesuada faucibus finibus.
            </p>
            <p className="text-gray-700 mb-6">
              Proin ullamcorper pretium orci. Donec nec scelerisque risus leo. Nam massa dolor imperdiet nec consectetur
              congue id sem. Maecenas malesuada faucibus finibus.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md">
              View All Members
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-4 text-center bg-white rounded-b-xl">
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <div className="flex justify-center gap-3 text-green-600 text-base">
                    <FaFacebookF className="hover:text-green-800 cursor-pointer" />
                    <FaTwitter className="hover:text-green-800 cursor-pointer" />
                    <FaInstagram className="hover:text-green-800 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
