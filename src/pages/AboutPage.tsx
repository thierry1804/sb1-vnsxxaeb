import React from 'react';
import { Mic, Heart, Globe, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-3 rounded-full inline-block mb-6">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          À propos de PodcastPro
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Depuis 2020, nous créons des conversations authentiques qui inspirent, 
          éduquent et connectent notre communauté d'auditeurs passionnés.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspirer</h3>
            <p className="text-gray-600">
              Partager des histoires qui motivent et donnent envie d'agir
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <Globe className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Connecter</h3>
            <p className="text-gray-600">
              Créer des liens entre les idées, les personnes et les communautés
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Éduquer</h3>
            <p className="text-gray-600">
              Démocratiser l'accès à l'expertise et à la connaissance
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre histoire</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Tout a commencé en 2020, pendant le confinement, quand notre équipe a réalisé 
            à quel point les conversations de qualité nous manquaient. Dans un monde 
            saturé d'informations, nous voulions créer un espace pour des échanges 
            authentiques et approfondis.
          </p>
          <p className="mb-6">
            Depuis nos débuts modestes avec un simple micro et beaucoup de passion, 
            nous avons grandi pour devenir l'une des plateformes de podcast les plus 
            écoutées de France. Mais notre mission reste la même : donner la parole 
            à ceux qui façonnent notre monde et rendre leurs idées accessibles à tous.
          </p>
          <p>
            Aujourd'hui, avec plus de 200 épisodes et une communauté de 50 000 auditeurs 
            mensuels, nous continuons d'explorer les sujets qui comptent vraiment : 
            innovation, culture, science, et entrepreneuriat.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Authenticité</h3>
            <p className="text-gray-600">
              Nous privilégions les conversations vraies, sans langue de bois, 
              où nos invités peuvent s'exprimer librement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualité</h3>
            <p className="text-gray-600">
              Chaque épisode est soigneusement préparé, enregistré et produit 
              pour offrir la meilleure expérience d'écoute.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Diversité</h3>
            <p className="text-gray-600">
              Nous donnons la parole à des profils variés, des secteurs différents, 
              pour refléter la richesse de notre société.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibilité</h3>
            <p className="text-gray-600">
              Nos contenus sont gratuits et disponibles sur toutes les plateformes 
              pour toucher le plus large public possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Une équipe passionnée</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Derrière PodcastPro, une équipe de journalistes, producteurs et passionnés 
          qui travaillent chaque jour pour vous offrir des contenus d'exception.
        </p>
        <div className="bg-purple-50 rounded-2xl p-8">
          <p className="text-purple-800 font-medium text-lg">
            "Notre objectif est simple : créer des podcasts que nous aimerions 
            écouter nous-mêmes."
          </p>
          <p className="text-purple-600 mt-4">— L'équipe PodcastPro</p>
        </div>
      </section>
    </div>
  );
};