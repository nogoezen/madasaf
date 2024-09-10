import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const features = [
  { title: "Analyse Avancée", description: "Obtenez des insights précis grâce à nos outils d'analyse de pointe." },
  { title: "Sécurité Renforcée", description: "Protégez vos données avec nos systèmes de sécurité de dernière génération." },
  { title: "Intégration Facile", description: "Intégrez nos solutions à votre infrastructure existante sans difficulté." },
]

export default function Features() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nos Fonctionnalités Clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="mr-2 text-primary h-6 w-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}