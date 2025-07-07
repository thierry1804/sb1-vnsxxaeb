import { Episode, Host, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'tech',
    name: 'Technologie',
    description: 'Dernières innovations et tendances tech',
    color: 'bg-blue-500',
    icon: 'Monitor'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Entrepreneuriat et stratégies d\'entreprise',
    color: 'bg-green-500',
    icon: 'Briefcase'
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Art, cinéma, littérature et société',
    color: 'bg-purple-500',
    icon: 'Palette'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Découvertes scientifiques et recherche',
    color: 'bg-orange-500',
    icon: 'Microscope'
  }
];

export const hosts: Host[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    bio: 'Journaliste tech avec 15 ans d\'expérience dans l\'innovation numérique. Passionnée par l\'impact de la technologie sur notre quotidien.',
    imageUrl: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@mariedubois',
      linkedin: 'marie-dubois-tech',
      instagram: '@marie_tech'
    }
  },
  {
    id: '2',
    name: 'Thomas Martin',
    bio: 'Expert en stratégie d\'entreprise et consultant en transformation digitale. Accompagne les startups dans leur croissance.',
    imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@thomasmartin',
      linkedin: 'thomas-martin-business'
    }
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    bio: 'Critique culturelle et historienne de l\'art. Explore les liens entre culture contemporaine et société.',
    imageUrl: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@sophielaurent',
      instagram: '@sophie_culture'
    }
  }
];

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'L\'intelligence artificielle va-t-elle remplacer les développeurs ?',
    description: 'Une analyse approfondie de l\'impact de l\'IA sur le monde du développement logiciel. Nous explorons les opportunités et les défis que représente cette révolution technologique.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '45:32',
    publishDate: '2024-01-15',
    category: 'tech',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-1',
    plays: 12543,
    hosts: ['1'],
    tags: ['IA', 'développement', 'futur du travail']
  },
  {
    id: '2',
    title: 'Créer une startup en 2024 : les nouveaux défis',
    description: 'Retour d\'expérience de jeunes entrepreneurs qui ont lancé leur startup cette année. Financement, équipe, pivot : tous les aspects sont abordés.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '38:15',
    publishDate: '2024-01-10',
    category: 'business',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-2',
    plays: 8765,
    hosts: ['2'],
    tags: ['startup', 'entrepreneuriat', 'financement']
  },
  {
    id: '3',
    title: 'L\'art numérique : révolution ou simple mode ?',
    description: 'NFT, art génératif, installations interactives... Découvrez comment le numérique transforme la création artistique contemporaine.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '52:18',
    publishDate: '2024-01-05',
    category: 'culture',
    imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-3',
    plays: 6432,
    hosts: ['3'],
    tags: ['art numérique', 'NFT', 'créativité']
  },
  {
    id: '4',
    title: 'Les mystères de l\'océan profond',
    description: 'Plongée dans les abysses avec les dernières découvertes scientifiques. Nouvelles espèces, écosystèmes uniques et technologies d\'exploration.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '41:27',
    publishDate: '2024-01-01',
    category: 'science',
    imageUrl: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-4',
    plays: 9876,
    hosts: ['1', '3'],
    tags: ['océan', 'découverte', 'biologie marine']
  },
  {
    id: '5',
    title: 'Cybersécurité : comment protéger son entreprise',
    description: 'Guide pratique pour renforcer la sécurité informatique en entreprise. Stratégies, outils et bonnes pratiques avec des experts du domaine.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '47:12',
    publishDate: '2023-12-28',
    category: 'tech',
    imageUrl: 'https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-5',
    plays: 11234,
    hosts: ['1', '2'],
    tags: ['cybersécurité', 'entreprise', 'protection']
  },
  {
    id: '6',
    title: 'L\'économie circulaire : utopie ou réalité ?',
    description: 'Analyse des modèles économiques durables et de leur impact sur l\'environnement. Exemples concrets d\'entreprises qui ont fait le pari de la circularité.',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: '44:55',
    publishDate: '2023-12-25',
    category: 'business',
    imageUrl: 'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=800',
    downloadUrl: 'https://example.com/download/episode-6',
    plays: 7890,
    hosts: ['2', '3'],
    tags: ['économie circulaire', 'durabilité', 'environnement']
  }
];