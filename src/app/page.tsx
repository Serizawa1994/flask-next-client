"use client";

import styles from "./page.module.css";
import { Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <main className={styles.main}>
      <div>
        <Button>ログイン</Button>
        The current theme is: {type}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </div>
    </main>
  );
}
