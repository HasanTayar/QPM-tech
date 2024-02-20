import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppProvider = () => {
  return (
    // Add the fixed, right-0, and bottom-0 classes to the section element
    <section className="z-50 fixed right-0 bottom-4 ">
      <Link href="whatsapp://send?phone=9720524802045" target="_blank">
        <Image
          alt="WhatsApp Logo"
          width={70}
          height={150}
          src="/WhatsApp.svg"
        />
      </Link>
    </section>
  );
};

export default WhatsAppProvider;
