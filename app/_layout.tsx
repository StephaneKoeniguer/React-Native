import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
      screenOptions={{
        headerShown: false, // Cacher les en-têtes par défaut
      }}
  />
}
