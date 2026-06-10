"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Icons } from "@/components/common/icons";
import { EducationInterface } from "@/config/education";

interface EducationCardProps {
  education: EducationInterface;
}

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const getDurationText = (startDate: Date, endDate: Date | "Present"): string => {
  const startYear = getYearFromDate(startDate);
  const endYear = typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {education.logo && (
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
              <Image
                src={education.logo}
                alt={education.school}
                width={64}
                height={64}
                className="w-full h-full object-contain p-2"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {education.degree}
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                {getDurationText(education.startDate, education.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-muted-foreground">
                {education.school}
              </span>
              {education.schoolUrl && (
                <a
                  href={education.schoolUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )} 
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {education.location}
            </p>
            {education.specialization && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground mb-2">
                {education.specialization}
              </span>
            )}
            <p className="text-sm text-muted-foreground">
              {education.description}
            </p>
          </div>
        </div>
        {education.courses.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors w-full sm:w-auto flex-shrink-0"
          >
            Courses
            <Icons.chevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      {isOpen && education.courses.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {education.courses.map((course, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-2 rounded-md bg-muted"
              >
                
                <div>
                  <p className="text-sm font-medium">{course.name}</p>
                  {course.description && (
                    <p className="text-xs text-muted-foreground">
                      {course.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCard;