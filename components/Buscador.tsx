"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type BuscadorProps = {
  onBuscar?: (texto: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function Buscador({
  onBuscar,
  placeholder = "Busca restaurantes, salud, comercio...",
  disabled = false,
}: BuscadorProps) {
  const [texto, setTexto] = useState("");
  const [buscando, setBuscando] = useState(false);

  function ejecutarBusqueda(valor: string) {
    const resultado = valor.trim();

    if (!resultado) {
      onBuscar?.("");
      return;
    }

    setBuscando(true);

    onBuscar?.(resultado);

    // Quitamos el estado de carga después de actualizar la interfaz.
    window.setTimeout(() => {
      setBuscando(false);
    }, 250);
  }

  function manejarSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    ejecutarBusqueda(texto);
  }

  function manejarCambio(evento: ChangeEvent<HTMLInputElement>) {
    setTexto(evento.target.value);
  }

  function limpiar() {
    setTexto("");
    setBuscando(false);
    onBuscar?.("");
  }

  const hayTexto = texto.trim().length > 0;

  return (
    <form
      onSubmit={manejarSubmit}
      role="search"
      className="w-full"
      aria-label="Buscar lugares en Santa Cruz"
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        {/* CAMPO DE BÚSQUEDA */}
        <div className="relative flex-1">
          <label htmlFor="busqueda-santa-cruz" className="sr-only">
            Buscar lugares
          </label>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-xl"
          >
            🔎
          </span>

          <input
            id="busqueda-santa-cruz"
            name="busqueda"
            type="search"
            value={texto}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled || buscando}
            onChange={manejarCambio}
            className="h-14 w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-12 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            aria-label="Buscar restaurantes, salud, comercio y otros lugares"
          />

          {/* LIMPIAR */}
          {hayTexto && !buscando && !disabled && (
            <button
              type="button"
              onClick={limpiar}
              aria-label="Limpiar búsqueda"
              title="Limpiar búsqueda"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              ✕
            </button>
          )}

          {/* CARGANDO */}
          {buscando && (
            <span
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-600"
              aria-hidden="true"
            />
          )}
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          disabled={disabled || buscando}
          className="h-14 rounded-2xl bg-emerald-600 px-8 font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-emerald-400"
          aria-label="Buscar en el directorio"
        >
          {buscando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {/* AYUDA */}
      <p className="mt-2 text-xs text-slate-400">
        Busca por nombre, categoría, ciudad o servicio.
      </p>
    </form>
  );
}