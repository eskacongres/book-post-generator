"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [theme, setTheme] = useState("");
  const [result, setResult] = useState("");

  function generatePosts() {
    const finalTitle = title || "Titre de l’ouvrage";
    const finalSubtitle = subtitle ? ` : ${subtitle}` : "";
    const finalAuthor = author || "Nom de l’auteur";
    const finalTheme = theme || "ce sujet";
    const finalSummary =
      summary ||
      "Cet ouvrage propose une approche claire et accessible pour mieux comprendre les enjeux abordés.";

    const publicationLine = publicationDate
      ? `L’ouvrage paraîtra le ${publicationDate}.`
      : "";

    const isbnLine = isbn ? `ISBN : ${isbn}` : "";

    const generatedText = `⚡ NOUVEAUTÉ 2026 ⚡

Nous avons fait paraître un ouvrage qui s’intitule "${finalTitle}${finalSubtitle}", écrit par ${finalAuthor}.

${publicationLine}

${finalTheme} reste un sujet important, et la sensibilisation ainsi que l’accès à une information claire sont plus essentiels que jamais.

À travers cet ouvrage, l’auteur apporte des réponses accessibles et structurées afin d’aider les lecteurs à mieux comprendre les enjeux, à approfondir leurs connaissances et à disposer de repères utiles.

${finalSummary}

${isbnLine}

Si ce sujet vous intéresse, vous pouvez dès à présent vous procurer l’ouvrage afin d’approfondir vos connaissances et de disposer d’un guide pratique pour mieux comprendre et agir.

${
  link
    ? `Pour l’acheter, cliquez sur le lien suivant : ${link}`
    : "Pour l’acheter, retrouvez prochainement le lien de l’ouvrage."
}

#Actualités #EditionsESKA #MAEditions`;

    setResult(generatedText);
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            Générateur de posts pour ouvrages ESKA
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Créez un post de lancement prêt à publier
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Renseigne les informations du livre, ajoute le lien d’achat, puis
            génère un message dans un style éditorial professionnel.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="mb-2 text-2xl font-semibold">
              Informations du livre
            </h2>

            <p className="mb-6 text-sm text-slate-300">
              Remplis les champs ci-dessous pour générer le post.
            </p>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Titre du livre
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Exemple : Les violences sexuelles et sexistes"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Sous-titre
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Exemple : 100 questions pour s’informer et réagir"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Auteur / autrice
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Exemple : Pr. Florence Boitrelle et Dr. Marion Bendayan"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    ISBN
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                    placeholder="Exemple : 978-2-7472-XXXX-X"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Date de parution
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                    value={publicationDate}
                    onChange={(e) => setPublicationDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Sujet principal du livre
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Exemple : La sensibilisation aux violences sexuelles et sexistes"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Résumé ou présentation du livre
                </label>
                <textarea
                  className="h-44 w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Colle ici la présentation du livre..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Lien d’achat
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20"
                  placeholder="Exemple : https://lnkd.in/..."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <button
                onClick={generatePosts}
                className="w-full rounded-xl bg-indigo-500 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Générer le post
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Post généré</h2>
                <p className="text-sm text-slate-500">
                  Le message apparaîtra ici au format LinkedIn.
                </p>
              </div>

              {result && (
                <button
                  onClick={copyResult}
                  className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Copier
                </button>
              )}
            </div>

            {!result ? (
              <div className="flex min-h-[600px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
                    📚
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Aucun post généré pour le moment
                  </h3>
                  <p className="max-w-sm text-sm text-slate-500">
                    Remplis les informations du livre puis clique sur
                    “Générer le post”.
                  </p>
                </div>
              </div>
            ) : (
              <div className="min-h-[600px] rounded-2xl bg-slate-50 p-6">
                <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-800">
                  {result}
                </pre>
              </div>
            )}
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h3 className="mb-2 font-semibold">Style éditorial</h3>
            <p className="text-sm text-slate-300">
              Le message reprend une structure adaptée aux annonces de nouveaux
              ouvrages.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h3 className="mb-2 font-semibold">Informations complètes</h3>
            <p className="text-sm text-slate-300">
              Ajoute le titre, le sous-titre, l’ISBN, la date de parution et le
              lien d’achat.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <h3 className="mb-2 font-semibold">Prêt à copier</h3>
            <p className="text-sm text-slate-300">
              Une fois généré, le post peut être copié directement pour LinkedIn.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}