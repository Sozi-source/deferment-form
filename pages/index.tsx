import React from "react";
import Head from "next/head";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Student Deferment Form — Imperial College</title>
        <meta
          name="description"
          content="Submit your deferment request for attachment or regular semester."
        />
      </Head>

      <div className="flex flex-col items-center bg-gray-50 p-6 shadow-md min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-100">
          <header className="text-center mb-8 w-full max-w-xl">
          <div className="flex justify-center mb-4">
            <Image
          src="/logo.png"
          alt=""
          width={120}
          height={120}
          className="rounded-lg"/>
          </div>
          
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Student Deferment Form
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            This form is intended for students <strong>requesting to defer</strong> either their 
            <strong> attachment period</strong> or <strong>regular semester</strong>.  
            Please ensure that all required details are filled out correctly before submitting.
          </p>
        </header>

        {/* Button to open in a new tab */}
        <div className="mt-6">
          <a
            href="https://forms.gle/AG8DWaZYMCXRnXk89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Defer Now
          </a>
        </div>

        <footer className="mt-16 w-full text-center bg-red-800 text-white py-4 text-sm">
          © {new Date().getFullYear()} Imperial College of Medical and Health Sciences. <br />
          <span className="text-white text-sm">Committed to Professional Excellence</span>
        </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
