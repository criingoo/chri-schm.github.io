import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Briefcase,
  Download,
  FileText,
  Linkedin,
  Dumbbell,
  MountainSnowIcon as Ski,
  ChefHat,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-primary">Cybersecurity Portfolio</div>
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Über mich
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
              Ausbildung
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Erfahrung
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Fähigkeiten
            </Link>
            <Link href="#modules" className="text-sm font-medium transition-colors hover:text-primary">
              Module
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projekte
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Cybersecurity <span className="text-primary">Student</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Major Security of Cloud, Mobile & IoT (MSC) an der Hochschule Luzern
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="#contact">Kontakt</Link>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                  <Link href="#projects">Projekte ansehen</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-8 h-full flex items-center justify-center border-2 border-primary/20">
              <div className="text-center space-y-2">
                <p className="text-lg font-medium">Profilbild</p>
                <p className="text-sm text-muted-foreground">(Platzhalter für Ihr Foto)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Ausbildung</h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">09.2023 – 07.2026</span>
                </div>
                <h3 className="text-xl font-semibold">Hochschule Luzern (HSLU)</h3>
                <p className="text-muted-foreground">Bachelor of Science in Information & Cyber Security, Vollzeit</p>
                <p className="text-muted-foreground">Major Security of Cloud, Mobile & IoT (MSC)</p>
                <p className="text-muted-foreground">Campus Zug – Rotkreuz, ZG</p>
              </div>
            </div>

            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">08.2022 – 07.2023</span>
                </div>
                <h3 className="text-xl font-semibold">Berufsbildungszentrum Goldau (BBZG)</h3>
                <p className="text-muted-foreground">Berufsmatura Technik, Architektur, Life Sciences, Vollzeit</p>
                <p className="text-muted-foreground">Goldau, SZ</p>
              </div>
            </div>

            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">08.2017 – 08.2020</span>
                </div>
                <h3 className="text-xl font-semibold">Gewerblich-industrielles Bildungszentrum Zug (GIBZ)</h3>
                <p className="text-muted-foreground">Ausbildung Koch EFZ</p>
                <p className="text-muted-foreground">Zug, ZG</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Berufserfahrung</h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Zeitraum 2</span>
                </div>
                <h3 className="text-xl font-semibold">Koch (100%)</h3>
                <p className="text-muted-foreground">Restaurant/Betrieb 2</p>
                <p className="text-muted-foreground">Standort</p>
                <p className="text-muted-foreground">
                  Beschreibung der Tätigkeiten und Verantwortlichkeiten. Diese Informationen können später ergänzt
                  werden.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Zeitraum 1</span>
                </div>
                <h3 className="text-xl font-semibold">Koch (100%)</h3>
                <p className="text-muted-foreground">Restaurant/Betrieb 1</p>
                <p className="text-muted-foreground">Standort</p>
                <p className="text-muted-foreground">
                  Beschreibung der Tätigkeiten und Verantwortlichkeiten. Diese Informationen können später ergänzt
                  werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Fähigkeiten und Kenntnisse</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle>Sprachen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Deutsch</span>
                    <span className="text-sm text-muted-foreground">Muttersprache</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Englisch</span>
                    <span className="text-sm text-muted-foreground">B2</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Französisch</span>
                    <span className="text-sm text-muted-foreground">Grundkenntnisse</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle>Zertifizierungen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary/70"></div>
                  <span>CompTIA Security+ (in Bearbeitung)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary/40"></div>
                  <span>Network+ (geplant)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle>Interessen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Dumbbell className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Kraftsport & Bodybuilding</h4>
                    <p className="text-sm text-muted-foreground">
                      Leidenschaft für strukturiertes Training und Disziplin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ski className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Ski & Wintersport</h4>
                    <p className="text-sm text-muted-foreground">Begeisterung für alpine Sportarten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChefHat className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium">Kochen & Backen</h4>
                    <p className="text-sm text-muted-foreground">
                      Kreative und ernährungsbewusste Zubereitung von Speisen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modules" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Abgeschlossene Module</h2>

          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="semester1">1. Semester</TabsTrigger>
              <TabsTrigger value="semester2">2. Semester</TabsTrigger>
              <TabsTrigger value="semester3">3. Semester</TabsTrigger>
              <TabsTrigger value="semester4">4. Semester</TabsTrigger>
              <TabsTrigger value="semester5">5. Semester</TabsTrigger>
              <TabsTrigger value="semester6">6. Semester</TabsTrigger>
            </TabsList>
            <TabsContent value="semester1" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semester2" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i + 6}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semester3" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i + 12}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semester4" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i + 18}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semester5" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i + 24}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semester6" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Modul {i + 30}</CardTitle>
                      <CardDescription>Modulbezeichnung</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Kurze Beschreibung des Moduls und der erworbenen Kompetenzen.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Projekte & Ressourcen</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Projekte</CardTitle>
                <CardDescription>Meine Cybersecurity-Projekte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-medium mb-2">Projekt {i}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Kurze Beschreibung des Projekts und der verwendeten Technologien.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-primary/30 text-primary hover:bg-primary/10"
                    >
                      <FileText className="h-4 w-4" />
                      Details
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>PDF-Ressourcen</CardTitle>
                <CardDescription>Dokumente und Zusammenfassungen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium">Dokument {i}</h3>
                      <p className="text-sm text-muted-foreground">PDF-Zusammenfassung</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Kontakt</h2>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-xl font-semibold">Kontaktieren Sie mich</h3>
                  <p className="text-muted-foreground">
                    Haben Sie Fragen oder möchten Sie mehr über meine Projekte erfahren? Zögern Sie nicht, mich zu
                    kontaktieren.
                  </p>
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <BookOpen className="h-4 w-4" />
                    Lebenslauf herunterladen
                  </Button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="font-medium">LinkedIn Profil</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 border-primary/20">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cybersecurity Portfolio. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

