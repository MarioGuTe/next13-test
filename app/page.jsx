"use client";
// ésta es la página principal donde se renderiza inicialmente la
// app
// Las distintas vistas se escriben dentro de carpetas con el nombre
// de la vista con una "page.jsx" dentro de la carpeta
// El archivo layout.jsx envuelve la aplicación para por ejemplo renderizar
// un mismo nav o footer etc a través de todas las vistas

export default function Home() {
  return (
    <main>
      <h1 onClick={console.log("hola")} className="text-xl py-2">
        Hello next 13 😁
      </h1>
    </main>
  );
}
