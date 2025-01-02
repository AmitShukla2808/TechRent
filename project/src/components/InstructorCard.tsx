import React from 'react';
import { Music4, Award } from 'lucide-react';
import { Instructor } from '../types';

type Props = {
  instructor: Instructor;
};

export function InstructorCard({ instructor }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img 
        src={instructor.imageUrl} 
        alt={instructor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Music4 className="w-4 h-4" />
          <span>{instructor.instrument}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Award className="w-4 h-4" />
          <span>{instructor.experience} years experience</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {instructor.specialties.map((specialty) => (
            <span 
              key={specialty}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}