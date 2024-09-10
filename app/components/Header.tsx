"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { ModeToggle } from "@/app/components/mode-toggle"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"

// Type pour les offres de tours
type TourOffer = {
  id: number;
  name: string;
  date: string;
  price: number;
}

// Données factices pour les offres de tours
const mockTourOffers: TourOffer[] = [
  { id: 1, name: "Paris City Tour", date: "2024-06-15", price: 50 },
  { id: 2, name: "Loire Valley Castles", date: "2024-07-01", price: 120 },
  { id: 3, name: "Normandy D-Day Beaches", date: "2024-08-10", price: 150 },
  { id: 4, name: "Mont Saint-Michel Day Trip", date: "2024-09-05", price: 130 },
  { id: 5, name: "Champagne Region Tour", date: "2024-10-20", price: 180 },
]

export default function Header() {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [tourOffers, setTourOffers] = useState<TourOffer[]>([]);

  useEffect(() => {
    // Ici, vous feriez normalement un appel API pour obtenir les vraies données
    // Pour cet exemple, nous utilisons les données factices
    const sortedOffers = [...mockTourOffers].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setTourOffers(sortedOffers);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">VotreEntreprise</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/fonctionnalites" className="transition-colors hover:text-foreground/80 text-foreground/60">Fonctionnalités</Link>
            <Link href="/tarifs" className="transition-colors hover:text-foreground/80 text-foreground/60">Tarifs</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
            <Button variant="ghost" onClick={() => setIsTableVisible(!isTableVisible)}>
              {isTableVisible ? "Masquer les offres" : "Voir les offres"}
            </Button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild>
              <Link href="/register">S'inscrire</Link>
            </Button>
          </nav>
        </div>
      </div>
      {isTableVisible && (
        <div className="container py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom du Tour</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Prix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tourOffers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell>{offer.name}</TableCell>
                  <TableCell>{new Date(offer.date).toLocaleDateString()}</TableCell>
                  <TableCell>{offer.price} €</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </header>
  )
}