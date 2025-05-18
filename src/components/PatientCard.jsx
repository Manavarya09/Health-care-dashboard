import React from 'react';

const PatientCard = ({ patient }) => {
  const { name, heartRate, oxygen, temperature, status, tags } = patient;
  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Status: <span className="font-medium">{status}</span></p>
      <p>Heart Rate: {heartRate} bpm</p>
      <p>Oxygen: {oxygen}%</p>
      <p>Temperature: {temperature}°C</p>
      <div className="mt-2">
        {tags.map((tag, i) => (
          <span key={i} className="inline-block px-2 py-1 mr-2 bg-blue-200 dark:bg-blue-600 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PatientCard;