// src/data/portfolioData.js
import robloxGame from '../assets/images/portfolio/game-roblox.png';
import timeApp from '../assets/images/portfolio/app-timemanagement.jpeg';
import reservationSys from '../assets/images/portfolio/web-reservasi.png';
import discordBot from '../assets/images/portfolio/bot-discord.png';
import moodApp from '../assets/images/portfolio/app-moodjournal.jpeg';
import studentSys from '../assets/images/portfolio/web-konseling.png';

export const portfolioItems = [
  {
    id: 1,
    title: 'Roblox FPS Game',
    category: 'Game Development',
    image: robloxGame,
    description: 'Developed an immersive FPS game project using Roblox Studio with custom game mechanics and level design',
    tech: ['Roblox Studio', 'Lua'],
    demoUrl: 'https://www.roblox.com/games/96749482214416/Shooting-Strike',
  },
  {
    id: 2,
    title: 'Time Management Mobile App',
    category: 'Mobile Development',
    image: timeApp,
    description: 'Mobile application for managing tasks and time efficiently with local database storage',
    tech: ['Flutter', 'SQLite'],
    githubUrl: 'https://github.com/JauneKece/pocket_planner'
  },
  {
    id: 3,
    title: 'Online Reservation System',
    category: 'Web Development',
    image: reservationSys,
    description: 'Online reservation website for managing bookings with user-friendly interface',
    tech: ['Laravel', 'MySQL'],
    githubUrl: 'https://github.com/JauneKece/desa-wisatuy'
  },
  {
    id: 4,
    title: 'Discord Bot',
    category: 'Bot Development',
    image: discordBot,
    description: 'Custom Discord bot with utility features for private server management and automation',
    tech: ['JavaScript', 'Discord.js'],
    githubUrl: 'https://github.com/JauneKece/HaloJuan'
  },
  {
    id: 5,
    title: 'Mood Journal Mobile App',
    category: 'Mobile Development',
    image: moodApp,
    description: 'Minimalist mood tracking application for recording daily emotions and thoughts with local storage',
    tech: ['Flutter', 'SQLite'],
    githubUrl: 'https://github.com/JauneKece/jurnal_mood_minimalis'
  },
  {
    id: 6,
    title: 'Student Information System',
    category: 'Web Development',
    image: studentSys,
    description: 'Comprehensive student information management system with integrated online counseling platform for school operations',
    tech: ['Next.js', 'Nest.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/4bit-Team/RuangSiswa-Fe'
  }
];