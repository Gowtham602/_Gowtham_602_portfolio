import { useTheme } from "../context/ThemeContext";

export default function ParticlesBg() {
  const { theme } = useTheme();

  return (
    <div>
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </div>
  );
}
