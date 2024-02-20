"use client";
import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoPaperAirplane } from "react-icons/go";
import Image from "next/legacy/image";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const FooterAr = () => {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (email === "") {
      return;
    } else {
      try {
        setLoading(true);
        const data = JSON.stringify({
          email: email,
          lang: "ar",
        });

        const res = await axios.post("/api/email/email_subscription", data);

        if (res.status === 200) {
          return toast({
            variant: "success",
            title: "لقد قمت بالتسجيل بنجاح",
            description: "لقد تابعت نشرتنا بنجاح",
          });
        } else {
          return toast({
            variant: "destructive",
            title: "أوه-أوه! لقد حدث خطأ ما.",
            description: "كانت هناك مشكلة مع طلبك.",
          });
        }
      } catch (error) {
        return toast({
          variant: "destructive",
          title: "أوه-أوه! لقد حدث خطأ ما.",
          description: "كانت هناك مشكلة مع طلبك.",
        });
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <footer className=" px-4 py-8" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-start">
        <div className="col-span-1">
          <label className="font-bold" dir="rtl">
            اشترك في نشرتنا الإخبارية{" "}
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="اشترك في نشرتنا الإخبارية"
            className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
          />
          <Button className="mt-5" onClick={handleSubscribe} disabled={loading}>
            أرسل
            <GoPaperAirplane className="h-3 w-3 mr-4" />
          </Button>
        </div>

        <div className="col-span-1">
          <label className="font-bold">أتصل بنا</label>
          <Link href="mailto:info@qpmatrix.tech">
            <p className="hover:text-gray-200 cursor-pointer">
              info@qpmatrix.tech
            </p>
          </Link>
          <Link href="tel:+972524802045">(+972)-524802045</Link>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold">تابعونا</h1>
          <div className="flex space-x-4">
            <Link href={"https://www.instagram.com/qpm.tech/"}>
              <FaInstagram className="w-8 h-8 hover:text-pink-500 cursor-pointer" />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61556657064896"}
            >
              <FaFacebook className="w-8 h-8 hover:text-blue-700 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <Link href="/ar">
            <Image
              src="/QPM.LOGO.svg"
              alt="Quantum Pinnacle Matrix"
              width={200}
              height={200}
              className="w-32 h-auto"
            />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2024 Quantum Pinnacle Matrix. كل الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default FooterAr;
