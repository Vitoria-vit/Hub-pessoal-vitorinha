import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using next/image for potential future optimization
import Card from '@/components/Card';
import Button from '@/components/Button';

// Basic calendar component (static for now)
const WeeklyCalendar = () => {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...

  return (
    <Card className="mb-6 bg-purple-50">
      <h3 className="text-lg font-semibold mb-3 text-purple-700">Calendário da Semana</h3>
      <div className="flex justify-around text-center">
        {days.map((day, index) => (
          <div key={day} className={`p-2 rounded-full ${index === today ? 'bg-pink-300 text-white font-bold' : 'text-gray-600'}`}>
            {day}
          </div>
        ))}
      </div>
    </Card>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-3xl mb-8 text-center bg-white shadow-xl">
        <h1 className="text-2xl font-semibold italic text-pink-700 mb-4">
          “Estou viva, presente e em processo.”
        </h1>
        <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center mb-6">
          {/* Placeholder for the image */}
          <span className="text-gray-500">Espaço para imagem inspiradora</span>
          {/* If an image path was available, it would be like:
          <Image src="/essencia-futuro.png" alt="Visão de Futuro" width={500} height={256} className="rounded-md object-cover" />
          */}
        </div>

        <WeeklyCalendar />

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/rotina" passHref legacyBehavior>
            <Button variant="primary" className="w-full md:w-auto">
              Check-in Diário
            </Button>
          </Link>
          <Link href="/diario" passHref legacyBehavior>
            <Button variant="secondary" className="w-full md:w-auto">
              Como estou me sentindo?
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;

