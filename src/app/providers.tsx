"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useTheme as useNextTheme } from "next-themes";
import {
  NextUIProvider,
  CssBaseline,
  Text,
  Button,
  Switch,
  useTheme,
  Container,
} from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <NextUIProvider>
      <Container fluid>
        <Navbar variant="sticky">
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              HomeParty
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">人気</Navbar.Link>
            <Navbar.Link isActive href="#">
              チャンネルを探す
            </Navbar.Link>
            <Navbar.Link href="#">友だちを探す</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <Navbar.Link color="inherit" href="login">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Navbar.Link color="inherit" href="login">
                <Button auto flat>
                  Sign Up
                </Button>
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        {children}
      </Container>
    </NextUIProvider>
  );
}
