import { useState } from "react";

const data = [
  {
    groupName: "Família",
    guests: ["Maria", "João", "Ana"],
  },
  {
    groupName: "Amigos",
    guests: ["Carlos", "Bruna", "Felipe"],
  },
  {
    groupName: "Trabalho",
    guests: ["Lucas", "Fernanda"],
  },
];

const GuestGroups = () => {
  const [openGroup, setOpenGroup] = useState(null);

  const toggleGroup = (groupName) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

  return (
    <ul className="w-full max-w-md mx-auto mt-4 space-y-2">
      {data.map((group) => (
        <li key={group.groupName} className="border rounded-lg shadow">
          <button
            className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 rounded-t-lg"
            onClick={() => toggleGroup(group.groupName)}
          >
            {group.groupName}
          </button>

          {openGroup === group.groupName && (
            <ul className="p-4 bg-white space-y-1">
              {group.guests.map((guest) => (
                <li
                  key={guest}
                  className="pl-2 border-l-2 border-gray-300 text-gray-700"
                >
                  {guest}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default GuestGroups;
