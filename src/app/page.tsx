"use client";

import { Button, Container, Grid } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <Container xl>
        <Grid.Container gap={2} justify="center">
          <Button>API疎通</Button>
        </Grid.Container>
      </Container>
    </main>
  );
}
