import React from 'react';
import qrImage from './assets/image-qr-code.png'

export default function QrCodeCard() {
  return (
    <section className="min-h-screen w-full bg-[hsl(212,45%,89%)] flex items-center justify-center p-[5vh]
">
      <article className="bg-white rounded-xl shadow-lg max-w-xs p-4 text-center min-h-[85vh] flex-col justify-center items-center">
        <img 
          src={qrImage} 
          alt="QR code to visit Frontend Mentor" 
          className="rounded-lg mb-6 object-contain h-[70%]"
        />
        <div>
          <h1 className="font-bold text-[1.35rem] text-gray-900 mb-2">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-gray-600 text-[0.96 rem] leading-relaxed m-2">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </article>
    </section>
  );
}
