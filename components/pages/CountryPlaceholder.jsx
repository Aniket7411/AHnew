"use client";

export default function CountryPlaceholder({ name }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
    </div>
  );
}
