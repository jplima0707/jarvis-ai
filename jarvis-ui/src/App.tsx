import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-zinc-100">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col justify-between">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Rodando em background
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Jarvis AI
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-300">
              Feche esta janela para esconder o app. Ele continua vivo no tray;
              clique no icone ou use o menu para abrir de novo.
            </p>
          </div>
        </div>

        <div className="grid gap-3 rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">
          <div>
            <p className="text-sm font-medium text-zinc-100">Tray inicial</p>
            <p className="text-sm text-zinc-400">
              Menu com Mostrar Jarvis e Sair configurado no Rust.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-100">Tailwind ativo</p>
            <p className="text-sm text-zinc-400">
              Esta tela ja esta usando classes utilitarias do Tailwind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
