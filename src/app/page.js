"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PatientView from "./pages/PatientView";
export default function Home() {
  return (
    <main className>
      <PatientView></PatientView>
    </main>
  );
}
