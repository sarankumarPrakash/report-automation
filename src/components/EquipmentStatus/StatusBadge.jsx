import React from 'react';

export const StatusBadge = ({ status }) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  const statusClasses = status === 'active' 
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";

  return (
    <span className={`${baseClasses} ${statusClasses}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};