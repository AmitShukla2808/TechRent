import React from 'react';
import { Clock, GraduationCap } from 'lucide-react';
import { Course } from '../types';
import { formatPrice } from '../utils/format';

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
      <div className="flex items-center gap-2 text-gray-600 mb-3">
        <Clock className="w-4 h-4" />
        <span>{course.duration}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <GraduationCap className="w-4 h-4" />
        <span>{course.level}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-purple-600">
          {formatPrice(course.price)}
        </span>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}