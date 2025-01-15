import React, { useEffect, useState } from "react";
import { getBoards, createBoard, deleteBoard } from "../services/trello";
import { Board } from "../types/trello";
import BoardCard from "../components/BoardCard";

const Dashboard: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    const fetchBoards = async () => {
      const boards = await getBoards();
      setBoards(boards);
    };
    fetchBoards();
  }, []);

  const handleCreateBoard = async () => {
    if (newBoardName.trim()) {
      const newBoard = await createBoard(newBoardName);
      setBoards((prev) => [...prev, newBoard]);
      setNewBoardName("");
    }
  };

  const handleDeleteBoard = async (id: string) => {
    await deleteBoard(id);
    setBoards((prev) => prev.filter((board) => board.id !== id));
  };

  return (
    <div>
      <h1>My Boards</h1>
      <div>
        <input
          type="text"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="Enter board name"
        />
        <button onClick={handleCreateBoard}>Create Board</button>
      </div>
      <div className="board-list">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} onDelete={handleDeleteBoard} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
