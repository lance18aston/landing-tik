"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WhatsAppSignupPage() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).ttq) {
      ;(window as any).ttq.track("ClickButton", {
        contents: [
          {
            content_id: "whatsapp-signup",
            content_type: "product",
            content_name: "WhatsApp Contact - 100% Bono",
          },
        ],
        value: 0,
        currency: "USD",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a]">
      {/* Header with navigation */}
      <div className="relative">
        <div className="absolute left-4 top-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-black/30 text-white hover:bg-black/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" x2="4" y1="22" y2="15" />
            </svg>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700">
          <Image
            src="/fox-complete-view.jpg"
            alt="Success imagery"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col items-center justify-between px-6 pb-8 pt-12">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-center text-2xl font-medium italic leading-relaxed text-white">
            Escribenos al WhatsApp para crear tu usuario
          </p>
        </div>

        {/* WhatsApp Button */}
        <Button
          asChild
          className="w-full rounded-lg bg-[#25D366] py-7 text-xl font-semibold text-white hover:bg-[#20BD5A]"
          size="lg"
        >
          <a
            href="https://wa.me/5491168221188?text=Hola%20vengo%20de%20TikTok%20quiero%20el%20100%25%20bono"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
