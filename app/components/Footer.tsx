import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <p className="text-muted-foreground">Notre entreprise s'engage à fournir des solutions innovantes pour votre succès.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Accueil</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Email: contact@example.com</p>
            <p className="text-muted-foreground">Téléphone: +33 1 23 45 67 89</p>
            <p className="text-muted-foreground">Adresse: 123 Rue de l'Innovation, 75000 Paris</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-muted-foreground">&copy; 2024 Votre Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}