import React from "react";
import { Board } from "../types/trello";

interface BoardCardProps {
  board: Board;
  onDelete: (id: string) => void;
}

const BoardCard: React.FC<BoardCardProps> = ({ board, onDelete }) => {
  return (
    <div className="board-card">
      <h3>{board.name}</h3>
      <p>Last Active Date: {new Date(board.dateLastActivity).toLocaleDateString()}</p>
      <a href={board.url} target="_blank" rel="noopener noreferrer">
        Open Board
      </a>
      <button onClick={() => onDelete(board.id)}>Remove</button>
    </div>
  );
};

export default BoardCard;
