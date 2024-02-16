interface Tarefa {
  descricao: string;
  concluida: boolean;
}

interface EstadoAplicacao {
  tarefas: Tarefa[];
  tarefaSelecionada: Tarefa | null;
}

let estado: EstadoAplicacao = {
  tarefas: [
    {
      descricao: "Tarefa concluída",
      concluida: true,
    },
    {
      descricao: "Tarefa pendente 1",
      concluida: false,
    },
    {
      descricao: "Tarefa pendente 2",
      concluida: false,
    },
  ],
  tarefaSelecionada: null,
};
