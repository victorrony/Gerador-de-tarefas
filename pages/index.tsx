import { useState } from "react";
import Button from "./components/button/Button";

export default function Home() {
  const [tarefas, setTarefas] = useState("");

  const [listTarefas, setListTarefas] = useState([]);
  console.log(tarefas);

  const handleClick = () => {
    if (!tarefas) return alert("preencha o campo");
    const newTarefas = {
      id: Math.random(),
      texto: tarefas,
    };
    setListTarefas([...listTarefas, newTarefas]);
    setTarefas("");
  };

  const removeTarefa = (id: any) => {
    const newListTarefas = listTarefas.filter((tarefa) => tarefa.id !== id);
    setListTarefas(newListTarefas);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[500px] min-h-80 text-center m-4 border-2 border-solid border-blue-700 bg-blue-600">
        <h1 className="text-2xl mb-6">TAREFAS</h1>
        <div className="flex flex-row h-20 gap-3 bg-blue-400 border-2 border-solid border-black ">
          <input
            type="text"
            name="tarefas"
            placeholder="criar-tarefas"
            value={tarefas}
            className="w-80 h-14 text-lg ml-2 m-auto"
            onChange={(e) => setTarefas(e.target.value)}
          />
          <Button
            babel="Adcionar Tarefas"
            onclick={() => handleClick()}
            className="text-white bg-red-600 mt-3 border-2 rounded-lg h-12 w-36  "
          />
        </div>
        <div className="min-h-20">
          <ul>
            {listTarefas.map((tarefas) => (
              <li key={tarefas.id}>
                <div className="flex flex-row content-center text-center items-center h-20  bg-blue-400 gap-3">
                  <p className=" align-middle w-[450px] h-16 bg-slate-100 ml-2 text-lg ">
                    {tarefas.texto}{" "}
                  </p>
                  <Button
                    babel="X"
                    onclick={() => removeTarefa(tarefas.id)}
                    className="bg-slate-700 items-end"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
