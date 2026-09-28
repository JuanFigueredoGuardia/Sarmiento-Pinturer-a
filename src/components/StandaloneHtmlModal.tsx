import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink } from 'lucide-react';
import { standaloneHtmlCode } from '../data/standaloneHtmlCode';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pintureria-sarmiento-sucursal-salta.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Código HTML Monolítico Autónomo
              </h3>
              <p className="text-[11px] text-slate-400">
                Archivo único listo para usar con Tailwind CSS CDN, CSS y JS internos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Código Copiado!' : 'Copiar Código'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .html</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code View Area */}
        <div className="p-4 bg-slate-950 overflow-y-auto flex-1 font-mono text-xs text-slate-300 select-all leading-relaxed">
          <pre className="whitespace-pre">{standaloneHtmlCode}</pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Formato: 1 archivo HTML autónomo (Tailwind CSS CDN + JS puro)</span>
          <button
            onClick={onClose}
            className="text-rose-400 hover:text-rose-300 font-semibold"
          >
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  );
};
