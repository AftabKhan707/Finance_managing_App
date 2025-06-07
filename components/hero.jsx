"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[105px] pb-6 gradient-title">
              Your Financial Future, <br /> Powered by AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Take control of your money with intelligent insights, automated
              tracking, and personalized recommendations that grow your wealth
              effortlessly.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="https://www.youtube.com/roadsidecoder">
                <Button size="lg" variant="outline" className="px-8">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
              <Image
                src="/banner.png"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
