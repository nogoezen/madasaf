import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const testimonials = [
  { id: 1, name: "Alice Dubois", role: "CEO, TechCorp", content: "Ce produit a révolutionné notre façon de travailler.", avatar: "/avatars/alice.jpg" },
  { id: 2, name: "Thomas Martin", role: "CTO, InnovSoft", content: "Une solution incroyable qui a boosté notre productivité.", avatar: "/avatars/thomas.jpg" },
  { id: 3, name: "Sophie Lefebvre", role: "Directrice Marketing, MediaGroup", content: "Je recommande vivement ce service à toutes les entreprises.", avatar: "/avatars/sophie.jpg" },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Ce que disent nos clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <p className="mb-4 text-muted-foreground">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <CardTitle className="text-sm font-semibold">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}