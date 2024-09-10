"use client"

import { useState, useEffect } from 'react'
import { useAuth } from "@/lib/useAuth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { BarChart, Users, FileText, Settings, Home, PieChart as PieChartIcon, MessageSquare, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const lineChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const pieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardPage() {
  const { session, status } = useAuth()
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (session?.user?.name) {
      setUserName(session.user.name)
    }
  }, [session])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Barre de menu latérale */}
      <aside className="w-64 bg-card text-card-foreground p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <Avatar className="mr-4">
            <AvatarImage src="/avatars/user.png" alt={userName} />
            <AvatarFallback>{userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">{userName}</h2>
            <p className="text-sm text-muted-foreground">Administrateur</p>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <Home className="mr-2 h-4 w-4" />
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link href="/dashboard/analytics" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <PieChartIcon className="mr-2 h-4 w-4" />
                Analytiques
              </Link>
            </li>
            <li>
              <Link href="/dashboard/users" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <Users className="mr-2 h-4 w-4" />
                Utilisateurs
              </Link>
            </li>
            <li>
              <Link href="/dashboard/projects" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <FileText className="mr-2 h-4 w-4" />
                Projets
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messages" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="flex items-center p-2 rounded-lg hover:bg-accent">
                <User className="mr-2 h-4 w-4" />
                Profil
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="ghost" className="mt-auto flex items-center" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-background border-b p-4">
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
        </header>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total des utilisateurs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231.89 €</div>
                <p className="text-xs text-muted-foreground">+20.1% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projets actifs</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 nouveaux projets cette semaine</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tâches en attente</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">7 tâches ajoutées aujourd'hui</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Évolution des ventes</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Répartition des revenus</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
                <CardDescription>Vous avez 3 nouvelles notifications</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Ici, vous pouvez ajouter une liste d'activités récentes */}
                <p>Liste des activités récentes à implémenter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}