// Import React dan useState
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../../public/images/logo.png";
// Komponen TableKelas
const TableKelas = () => {
  const tableHeadKelas = ["Kelas"];
  const tableDataKelas = [["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"]];

  return (
    <table className="text-center -mt-2 mr-2">
      <thead>
        <tr>
          {tableHeadKelas.map((head, index) => (
            <th
              key={index}
              className="px-10 py-2 rounded-2xl bg-[#AC2427] shadow-md text-white border-0"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableDataKelas.map((data, rowIndex) => (
          <tr
            key={rowIndex}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            {data.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: "#59595C",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  border: "0",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Komponen TableJam
const TableJam = () => {
  const tableHeadJam = ["Jam"];
  const tableDataJam = [["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"]];

  return (
    <table className="text-center -mt-2 mr-2">
      <thead>
        <tr>
          {tableHeadJam.map((head, index) => (
            <th
              key={index}
              className="px-10 py-2 rounded-2xl bg-[#AC2427] shadow-md text-white border-0"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableDataJam.map((data, index) => (
          <tr key={index} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {data.map((cell, index) => (
              <td
                key={index}
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: "#808184",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  border: "0",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Komponen TablePelajaran
const TablePelajaran = () => {
  const tableHeadPelajaran = ["A", "B", "C", "D", "E", "F", "G"];

  const tableDataPelajaran = [
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
    ["PKK", "PKK", "PKK", "PKK", "PKK", "PKK", "PKK"],
  ];

  return (
    <table className="text-center -mt-2">
      <thead>
        <tr>
          {tableHeadPelajaran.map((head, index) => (
            <th
              key={index}
              className="px-10 py-2 rounded-2xl bg-[#AC2427] shadow-md text-white border-0"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableDataPelajaran.map((data, index) => (
          <tr key={index}>
            {data.map((cell, index) => (
              <td
                key={index}
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  color: "black",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  border: "0",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Komponen Navbar
const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const formatDateTime = (date) => {
    const roundedDate = new Date(date);
    roundedDate.setSeconds(0);

    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
    };

    const dateString = roundedDate.toLocaleString("id-ID", dateOptions);
    const timeString = roundedDate.toLocaleString("id-ID", timeOptions);

    return {
      date: dateString,
      time: timeString,
    };
  };

  const formattedDateTime = formatDateTime(currentDateTime);

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="text-black font-bold font-poppins">
        {formattedDateTime.date}
      </div>
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="SMK Telkom Logo" className="w-32" />
      </div>
      <div className="text-black font-bold text-2xl font-poppins">
        {formattedDateTime.time}
      </div>
    </div>
  );
};

// Komponen utama Signage
const Signage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <TableKelas />
        <TableJam />
        <TablePelajaran />
      </div>
    </div>
  );
};

// Ekspor komponen Signage
export default Signage;
