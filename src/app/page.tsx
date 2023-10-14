"use client";
import { Button } from "$/components/ui";
import { signOut, signIn } from "next-auth/react";
export default function Home() {
  return (
    <main>
      <Button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </Button>
      <Button
        onClick={() => {
          signOut()
        }}
        intent={"secondary"}
      >
        Login with Google
      </Button>
    </main>
  )
}
