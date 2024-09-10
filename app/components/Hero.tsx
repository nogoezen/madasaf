"use client"

import { Button } from "@/app/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Solutions Innovantes",
    description: "Propulsez votre entreprise vers le succès avec nos outils de pointe",
    buttonText: "Découvrir",
    image: "/hero-image-1.jpg"
  },
  {
    title: "Expertise Sur Mesure",
    description: "Des solutions adaptées à vos besoins spécifiques",
    buttonText: "En savoir plus",
    image: "/hero-image-2.jpg"
  },
  {
    title: "Support 24/7",
    description: "Une équipe d'experts à votre service à tout moment",
    buttonText: "Nous contacter",
    image: "/hero-image-3.jpg"
  },
]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative flex flex-col items-center justify-center min-h-[600px] w-full">
              <div className="absolute inset-0 z-0">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <Button size="lg" variant="secondary">{slide.buttonText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </section>
  )
}