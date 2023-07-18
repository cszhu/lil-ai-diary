import { useStytch, useStytchSession } from "@stytch/nextjs";
import React, { useEffect, useState } from "react";
import CodeBlock from "./common/CodeBlock";
import axios from "axios";
require("dotenv").config();

type Entry = {
  timestamp: number;
  content: string;
};

function SessionDemo() {
  const [diaryEntries, setDiaryEntries] = useState<Entry[]>([]);
  const [apiResults, setApiResults] = useState<string[]>([]);
  const [newEntry, setNewEntry] = useState("");

  const handleAddEntry = async () => {
    const timestamp = Date.now();
    const newDiaryEntry: Entry = { timestamp, content: newEntry };
    setDiaryEntries([...diaryEntries, newDiaryEntry]);

    try {
      const response = await fetch("/api/analyzeDiaryEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entry: newDiaryEntry.content }),
      });

      if (response.ok) {
        const data = await response.json();
        setApiResults([...apiResults, data.choices[0].text]);
      } else {
        throw new Error("API error");
      }
    } catch (err) {
      console.error(err);
    }

    setNewEntry("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* New Entry */}
      <div style={{ marginTop: "1em" }}>
        <textarea
          style={{
            width: "100%",
            minHeight: "100px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button
          style={{
            display: "block",
            width: "100%",
            padding: "10px 20px",
            marginTop: "10px",
            fontSize: "16px",
            backgroundColor: "#89CFF0",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleAddEntry}
        >
          Add Diary Entry
        </button>
      </div>
      <br></br>
      <br />
      {diaryEntries.map((entry, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }} key={index}>
            {/* Diary Entries Column */}
            <div style={{ flex: "1 1 0", marginRight: "1em" }}>
              <h2>Diary Entry</h2>
              <p>
                <strong>{new Date(entry.timestamp).toLocaleString()}:</strong>{" "}
                {entry.content}
              </p>
            </div>
            {/* OpenAI API Results Column */}
            <div style={{ flex: "1 1 0" }}>
              <h2>AI Diary Result</h2>
              <p>
                <strong>{new Date(entry.timestamp).toLocaleString()}:</strong>{" "}
                {apiResults[index]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SessionDemo;
