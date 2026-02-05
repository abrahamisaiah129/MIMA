import React from "react";
import { X, Ruler } from "lucide-react";

const SizeGuide = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-2xl w-full animate-slide-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
            <Ruler size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Size Guide</h2>
          <p className="text-gray-400 text-sm mt-2">Find your perfect fit across all regions.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-white/5 font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 rounded-l-lg">EU (MIMA Standard)</th>
                <th className="px-6 py-4">US Women</th>
                <th className="px-6 py-4">UK</th>
                <th className="px-6 py-4 rounded-r-lg">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                { eu: "35", us: "5", uk: "2.5", cm: "22.5" },
                { eu: "36", us: "6", uk: "3.5", cm: "23.0" },
                { eu: "37", us: "6.5", uk: "4", cm: "23.5" },
                { eu: "38", us: "7.5", uk: "5", cm: "24.0" },
                { eu: "39", us: "8.5", uk: "6", cm: "25.0" },
                { eu: "40", us: "9", uk: "6.5", cm: "25.5" },
                { eu: "41", us: "9.5", uk: "7", cm: "26.0" },
                { eu: "42", us: "10", uk: "7.5", cm: "26.5" },
                { eu: "43", us: "10.5", uk: "8", cm: "27.5" },
                { eu: "44", us: "12", uk: "9.5", cm: "28.5" },
                { eu: "45", us: "13", uk: "10.5", cm: "29.5" },
                { eu: "46", us: "14", uk: "11.5", cm: "30.5" },
              ].map((size) => (
                <tr key={size.eu} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="px-6 py-4 font-bold text-white">{size.eu}</td>
                  <td className="px-6 py-4">{size.us}</td>
                  <td className="px-6 py-4">{size.uk}</td>
                  <td className="px-6 py-4">{size.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Tip: If you are between sizes, we recommend sizing up for maximum comfort.</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
